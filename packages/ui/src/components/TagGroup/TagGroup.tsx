/*
 * Copyright 2025 The Backstage Authors
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

import type { TagProps, TagGroupProps } from './types';
import {
  TagGroup as ReactAriaTagGroup,
  TagList as ReactAriaTagList,
  Tag as ReactAriaTag,
  Button as ReactAriaButton,
  RouterProvider,
} from 'react-aria-components';
import type { ReactNode } from 'react';
import { RiCloseCircleLine } from '@remixicon/react';
import clsx from 'clsx';
import { useStyles } from '../../hooks/useStyles';
import { isExternalLink } from '../../utils/isExternalLink';
import { useNavigate, useHref } from 'react-router-dom';
import styles from './TagGroup.module.css';

/**
 * A component that renders a list of tags.
 *
 * @public
 */
export const TagGroup = <T extends object>(props: TagGroupProps<T>) => {
  const { classNames, cleanedProps } = useStyles('TagGroup', props);
  const { items, children, renderEmptyState, ...rest } = cleanedProps;

  return (
    <ReactAriaTagGroup
      className={clsx(classNames.group, styles[classNames.group])}
      {...rest}
    >
      <ReactAriaTagList
        className={clsx(classNames.list, styles[classNames.list])}
        items={items}
        renderEmptyState={renderEmptyState}
      >
        {children}
      </ReactAriaTagList>
    </ReactAriaTagGroup>
  );
};

/**
 * A component that renders a tag.
 *
 * @public
 */
export const Tag = (props: TagProps) => {
  const { classNames, cleanedProps } = useStyles('TagGroup', {
    size: 'small',
    ...props,
  });
  const { children, className, icon, size, href, ...rest } = cleanedProps;
  const textValue = typeof children === 'string' ? children : undefined;
  const navigate = useNavigate();
  const isLink = href !== undefined;
  const isExternal = isExternalLink(href);

  const content = (
    <ReactAriaTag
      textValue={textValue}
      className={clsx(classNames.tag, styles[classNames.tag], className)}
      data-size={size}
      href={href}
      {...rest}
    >
      {({ allowsRemoving }) => (
        <>
          {icon && (
            <span
              className={clsx(classNames.tagIcon, styles[classNames.tagIcon])}
            >
              {icon}
            </span>
          )}
          {children as ReactNode}
          {allowsRemoving && (
            <ReactAriaButton
              className={clsx(
                classNames.tagRemoveButton,
                styles[classNames.tagRemoveButton],
              )}
              slot="remove"
            >
              <RiCloseCircleLine size={16} />
            </ReactAriaButton>
          )}
        </>
      )}
    </ReactAriaTag>
  );

  if (isLink && !isExternal) {
    return (
      <RouterProvider navigate={navigate} useHref={useHref}>
        {content}
      </RouterProvider>
    );
  }

  return content;
};
