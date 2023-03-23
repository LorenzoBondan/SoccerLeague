export type SpringPage<T> = {
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty: boolean;
  };

export type Stadium = {
    id: number;
    name: string;
    capacity: number;
    location: string;
    latitude: number;
    longitude: number;
    imgUrl: string;
    teams: Team[];
}

export type Team = {
    id: number;
    name: string;
    members: number;
    internationalCups: number;
    continentalCups: number;
    nationalCups: number;
    nationalLeagues: number;
    serie: string;
    imgUrl: string;
    stadium: Stadium;
}

export type Player = {
    id: number;
    name: string;
    nickname: string;
    birthDate: string;
    imgUrl: string;
    teamId: number;
    position : string; /* string because I handle it in PlayerCard */
}

/*
export enum Position {
    GOALKEEPER,
    DEFENDER,
    MIDDLE_FIELD,
    FORWARD
}
*/
