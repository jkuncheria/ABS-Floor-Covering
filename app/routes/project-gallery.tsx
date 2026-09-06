import { pageMeta } from '../seo';
import Page from '../../pages/ProjectGallery';

export const meta = () => pageMeta('projectGallery');

export default function Route() {
  return <Page />;
}
