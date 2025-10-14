/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { RiArrowRightSLine, RiCloudLine } from '@remixicon/react';

const meta = {
  title: 'Backstage UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  args: {
    children: 'Button',
  },
  parameters: {
    argTypes: {
      variant: {
        control: false,
      },
    },
  },
  render: () => (
    <Flex align="center">
      <Button iconStart={<RiCloudLine />} variant="primary">
        Button
      </Button>
      <Button iconStart={<RiCloudLine />} variant="secondary">
        Button
      </Button>
      <Button iconStart={<RiCloudLine />} variant="tertiary">
        Button
      </Button>
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <Flex align="center">
      <Button size="small" iconStart={<RiCloudLine />}>
        Small
      </Button>
      <Button size="medium" iconStart={<RiCloudLine />}>
        Medium
      </Button>
    </Flex>
  ),
};

export const WithIcons: Story = {
  args: {
    children: 'Button',
  },
  render: args => (
    <Flex align="center">
      <Button {...args} iconStart={<RiCloudLine />} />
      <Button {...args} iconEnd={<RiArrowRightSLine />} />
      <Button
        {...args}
        iconStart={<RiCloudLine />}
        iconEnd={<RiArrowRightSLine />}
      />
    </Flex>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Button',
  },
  render: args => (
    <Flex direction="column" gap="4" style={{ width: '300px' }}>
      <Button {...args} iconStart={<RiCloudLine />} />
      <Button {...args} iconEnd={<RiArrowRightSLine />} />
      <Button
        {...args}
        iconStart={<RiCloudLine />}
        iconEnd={<RiArrowRightSLine />}
      />
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="row" gap="4">
      <Button variant="primary" isDisabled>
        Primary
      </Button>
      <Button variant="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="tertiary" isDisabled>
        Tertiary
      </Button>
    </Flex>
  ),
};

export const Responsive: Story = {
  args: {
    children: 'Button',
    variant: {
      initial: 'primary',
      sm: 'secondary',
    },
    size: {
      xs: 'small',
      sm: 'medium',
    },
  },
};

const variants = ['primary', 'secondary'] as const;
const sizes = ['small', 'medium'] as const;

export const Playground: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <Flex direction="column">
      {variants.map(variant => (
        <Flex direction="column" key={variant}>
          <Text>{variant}</Text>
          {sizes.map(size => (
            <Flex align="center" key={size}>
              <Button variant={variant} size={size}>
                Button
              </Button>
              <Button iconStart={<RiCloudLine />} variant={variant} size={size}>
                Button
              </Button>
              <Button
                iconEnd={<RiArrowRightSLine />}
                variant={variant}
                size={size}
              >
                Button
              </Button>
              <Button
                iconStart={<RiCloudLine />}
                iconEnd={<RiArrowRightSLine />}
                style={{ width: '200px' }}
                variant={variant}
                size={size}
              >
                Button
              </Button>
              <Button variant={variant} size={size} isDisabled>
                Button
              </Button>
              <Button
                iconStart={<RiCloudLine />}
                variant={variant}
                size={size}
                isDisabled
              >
                Button
              </Button>
              <Button
                iconEnd={<RiArrowRightSLine />}
                variant={variant}
                size={size}
                isDisabled
              >
                Button
              </Button>
            </Flex>
          ))}
        </Flex>
      ))}
    </Flex>
  ),
};
