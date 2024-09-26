interface Awards {
    awardCt: number;
    awards: string[];
}
export interface ProfileProps{
    name : string;
    imageId: string;
    profession : string;
    awards: Awards;
    discovered : string;
    size?: number;
}