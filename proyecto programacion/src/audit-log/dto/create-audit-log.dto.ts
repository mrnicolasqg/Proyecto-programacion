import { IsNumber, IsString } from "class-validator"

export class CreateAuditLogDto {
    @IsString()
    action:    String
    @IsNumber()
    userId:    number
    @IsString()
    details:   String
}
