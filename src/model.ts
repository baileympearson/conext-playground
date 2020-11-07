

export interface ModelInputs { 
    length: number;
    width: number;
    height: number;
}

export interface ModelOutputs {
    surfaceArea: number;
    volume: number;
}

export function model({ length, width, height }: ModelInputs): ModelOutputs {
    return {
        surfaceArea: 2*length*width + 2*width*height + 2*length*height,
        volume: length * width * height
    }
}

export const initialModelInputs: ModelInputs = {
    length: 1,
    width: 1,
    height: 1
}