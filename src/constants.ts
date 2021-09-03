import { ReactComponent as beHonest } from './core-values/be-honest.svg';
import { ReactComponent as buildProducts } from './core-values/build-the-products-that-customers-love.svg';
import { ReactComponent as haveAudacious } from './core-values/have-audacious-goals.svg';
import { ReactComponent as haveEmpathy } from './core-values/have-empathy.svg';
import { ReactComponent as beBest } from './core-values/be-best-at-what-you-do.svg';
import { CoreValueCardI } from './interfaces/interface';


export const CORE_VALUES: CoreValueCardI[] = [
  {
    icon: buildProducts,
    text: 'Build products that customers love',
    number: 15
  },
  {
    icon: haveAudacious,
    text: 'Have audacious goals',
    number: 18
  },
  {
    icon: beBest,
    text: 'Be the best at what you do',
    number: 5
  },
  {
    icon: beHonest,
    text: 'Be honest',
    number: 32
  },
  {
    icon: haveEmpathy,
    text: 'Have empathy',
    number: 24
  }
];