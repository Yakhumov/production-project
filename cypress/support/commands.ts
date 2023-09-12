import * as commonCommands from "./commands/common";
import * as profileCommands from "./commands/profile";
import * as articleCommands from "./commands/article"
import *as  commentsCommands from "./commands/comment" 

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);

export {};
