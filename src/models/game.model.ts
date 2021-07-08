export enum GameTime {
    MINUTE10 = 60 *10,
    MINUTE5 = 60 * 5,
    MINUTE2 = 60 * 2,
    MINUTE1 = 60
}

export const getAllGameTime = ():{code:GameTime, text:string}[] => {
    return [
        {
            code: GameTime.MINUTE1,
            text: '1 Minutes'
        },
        {
            code: GameTime.MINUTE2,
            text: '2 Minutes'
        },
        {
            code: GameTime.MINUTE5,
            text: '5 Minutes'
        },
        {
            code: GameTime.MINUTE10,
            text: '10 Minutes'
        },
    ]
}