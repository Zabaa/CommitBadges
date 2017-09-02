import { Badge } from "./../badges/Badge";

export interface ViewBuilder {
    build(badge: Badge);
}
