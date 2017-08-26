namespace Comparators {
    export class DefaultResultComparator implements Comparators.ResultComparator {
        compare(count: number, badge: Badges.Badge) {
            badge.points = count;
        }
    }
}