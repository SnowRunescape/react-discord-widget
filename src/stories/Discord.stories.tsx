import type { Meta, StoryObj } from '@storybook/react';
import Discord from '@Discord/components/Discord';

const meta: Meta<typeof Discord> = {
  component: Discord,
};

type Story = StoryObj<typeof Discord>;

export const Widget: Story = {
  parameters: {
    layout: 'centered',
  },
  decorators: [(StoryComponent: React.ComponentType) => (
    <div style={{ width: 420 }}>
      <StoryComponent />
    </div>
  )],
  args: {
    id: '451861943364616192',
    theme: 'dark',
  },
};

export default meta;
