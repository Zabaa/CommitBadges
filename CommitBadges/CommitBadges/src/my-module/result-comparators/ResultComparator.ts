import Badge from "./../badges/Badge";

export interface ResultComparator {
    compare(count: number, badge: Badge);
}
