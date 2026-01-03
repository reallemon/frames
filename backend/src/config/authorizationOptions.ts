import { AsyncMetadata, Authenticator } from '@eleven-am/authorizer';
import { SessionService } from '../session/session.service';

export const authorizationOptions: AsyncMetadata = {
    inject: [SessionService],
    useFactory: (sessionService: SessionService): Authenticator => ({
        allowNoRulesAccess: (context) => sessionService.allowNoRulesAccess(context),
        // FIX: Cast to 'any' to satisfy the compiler while sending the sanitized user to the validator
        retrieveUser: (context) => sessionService.retrieveUser(context) as any,
    })
}
