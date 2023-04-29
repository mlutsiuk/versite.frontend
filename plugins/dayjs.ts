import { extend, locale } from 'dayjs';
import 'dayjs/locale/uk';

import weekday from 'dayjs/plugin/weekday';
import relativeTime from 'dayjs/plugin/relativeTime';

extend(weekday);
extend(relativeTime);
locale('uk');

export default defineNuxtPlugin(() => {});
