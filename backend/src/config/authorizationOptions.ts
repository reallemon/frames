import { AsyncMetadata, Authenticator } from '@eleven-am/authorizer';
import { SessionService } from '../session/session.service';

export const authorizationOptions: AsyncMetadata = {
    inject: [SessionService],
    useFactory: (sessionService: SessionService): Authenticator => ({
        allowNoRulesAccess: (context) => sessionService.allowNoRulesAccess(context),
        // Keep 'as any' to allow our hybrid object (Prisma User + browserId) to pass
        retrieveUser: (context) => sessionService.retrieveUser(context) as any,
    })
}
