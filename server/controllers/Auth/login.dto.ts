import {IsString} from 'class-validator';

class LoginUserDto{
    @IsString()
    public user!: string;

    @IsString()
    public password!: string;

    @IsString()
    public loginUsing!: string;


}

export default LoginUserDto;