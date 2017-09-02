import { ResultComparator } from "./ResultComparator";
import { Badge } from "./../badges/Badge";

export class DefaultResultComparator implements ResultComparator {
    public compare(count: number, badge: Badge) {
        badge.points = count;
    }
}
