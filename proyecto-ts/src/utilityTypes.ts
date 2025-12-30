//1

type User = {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
    isActive: boolean;
};


type EditUserForm = Partial<Omit<User, "id">> & {
    imgUrl?: string;
};

type DogsInfo = {
    name: string;
    id: number;
    born: number;

}

type DogOwner = Partial<Omit<DogsInfo, 'id'>> & {
    imgUrl?: string;
    owner: string;
}

//2 

type CardOptions = Pick<DogOwner, 'owner' | 'name'>

//3
type NewOwner = Omit<DogsInfo, 'id'>

//4

type configApp = {
    apiUrl: string;
    environment: string;
    version: string;
}

type NoMutableConfiguration = Readonly<configApp>

const configa: NoMutableConfiguration = {
    apiUrl: "...",
    environment: "prod",
    version: "1.0.0",
};

type ConfigAppa = {
    apiUrl: string;
    environment: string;
    version: string;
};

type NoMutableConfigurationa = Readonly<ConfigAppa>;

const config: NoMutableConfiguration = {
    apiUrl: "...",
    environment: "prod",
    version: "1.0.0",
};


//5
type States = "idle" | "loading" | "success" | "error";

type DinamicStatus = Record<States, string>

const status: DinamicStatus = {
    idle: "Esperando",
    loading: "Cargando...",
    success: "Todo ok",
    error: "Algo falló"
}
