export interface IInputForm {
        name: string;
        type: string;
        required: boolean;
        handleChange?: (event: React.SyntheticEvent) => void;
    
}