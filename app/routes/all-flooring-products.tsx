import { pageMeta } from '../seo';
import Page from '../../pages/AllFlooringProducts';

export const meta = () => pageMeta('allFlooringProducts');

export default function Route() {
  return <Page />;
}
