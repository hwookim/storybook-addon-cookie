import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { cookieDecorator } from './cookieDecorator';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [cookieDecorator],
};

export default preview;
