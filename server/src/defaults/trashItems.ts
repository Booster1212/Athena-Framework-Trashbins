// We will use DB Name.

import { Trash } from '@AthenaPlugins/trashbin-simulator/shared/trashInterface';

export const trashItems: Array<Trash> = [
    { dbName: 'cheese', dropChance: 50, amount: 10 },
    { dbName: 'potato', dropChance: 25, amount: 10 },
];
