 export interface userInterfce {
  fullname?: string;
  userName?:string,
  role?:string,
  profileImage?:string,
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface loginInterface{
    email:string,
    password:string
}


