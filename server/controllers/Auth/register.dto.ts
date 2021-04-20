import {IsString} from 'class-validator';

class RegisterUserDto{
    @IsString()
    public user!: string;

    @IsString()
    public password!: string;

    @IsString()
    public username!: string;
    
    @IsString()
    public fullName!: string;

    @IsString()
    public registeredUsing!: string;


}

export default RegisterUserDto;