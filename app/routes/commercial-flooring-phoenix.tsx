import { pageMeta } from '../seo';
import Page from '../../pages/PhoenixCommercial';

export const meta = () => pageMeta('phoenixCommercial');

export default function Route() {
  return <Page />;
}
