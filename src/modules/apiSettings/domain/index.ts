export interface Authorization {
	ID: string | number
	Name:        string
	Description: string 
}

export interface Integration {
    ID: string | number;
    ApiKey: string;
    Name: string;
    hidden: boolean;
    ApiID: boolean;
    Authorization: Authorization;
    AuthorizationName?: string;
}