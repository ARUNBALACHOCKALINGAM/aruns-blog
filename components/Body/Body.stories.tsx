import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { IBody } from './Body';
import { mockNavbarProps } from './Body.mocks';

export default {
  title: 'Navbar/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavbarProps.base,
} as IBody;
