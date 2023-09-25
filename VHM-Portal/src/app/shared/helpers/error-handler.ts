export class ErrorHandler {
    static processErrorModel(errorModel: string[]): string | null {
    let text: string = '';
    for (let i = 0; i < errorModel.length; i++) {
        text += `-${errorModel[i]}` + '<br/>';
    }
    return text;
}
}