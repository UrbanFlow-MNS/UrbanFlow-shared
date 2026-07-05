import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: "AGENCY_PACKAGE",
                transport: Transport.GRPC,
                options: {
                    package: "user",
                    protoPath: join(
                        __dirname,
                        "../../../proto/files/user.proto",
                    ),
                    url: process.env.USER_SERVICE_GRPC_URL ?? "localhost:7006",
                    loader: { enums: String },
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class AgencyGrpcModule {}
