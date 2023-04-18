import dayjs from 'dayjs';
import 'dayjs/locale/uk';

import weekday from 'dayjs/plugin/weekday';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(weekday);
dayjs.extend(relativeTime);
dayjs.locale('uk');

export default defineNuxtPlugin(() => {});
