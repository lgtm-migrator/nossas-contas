import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    senha: string;
}
