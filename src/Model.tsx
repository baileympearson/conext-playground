import React, { useState, useContext, createContext } from 'react';
import { initialModelInputs, model, ModelOutputs } from './model';
var NumericInput = require('react-numeric-input');

const initialModel = {
    input: initialModelInputs,
    output: model(initialModelInputs),
};

const ModelContext = createContext({
    ...initialModel,
    update: model
});

export function ModelOutput({ name }: { name: string }) {
    const { output } = useContext(ModelContext);
    const value = (output as any)[name];
    return <span style={ { fontWeight: 'bold'}}>{value}</span>
}

export function ModelInput({ name }: { name: string }) {
    const modelContext = useContext(ModelContext);
    const clickHandler = (newValue: number) => {
        const { input, update } = modelContext;
        const newInputs = { ...input, [name]: newValue };
        update(newInputs);
    }

    const val = (modelContext.input as any)[name]
    return <NumericInput min={0} max={35} value={val} onChange={clickHandler} />
}

export function ModelWrapper({ children }: any) {
    const [state, updateState] = useState(initialModel);
    const clickHandler = (newInput: any) => {
        const newOutput = model(newInput);
        const newState = {
            ...state,
            input: newInput,
            output: newOutput
        }
        updateState(newState)
    }
    const data = {
        ...state,
        update: clickHandler
    }
    return (
        <ModelContext.Provider value={data as any}>
            {children}
        </ModelContext.Provider>
    );
}