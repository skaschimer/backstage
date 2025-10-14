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

import { Link, RouterProvider } from 'react-aria-components';
import { useStyles } from '../../hooks/useStyles';
import { useRef } from 'react';
import { RiShapesLine } from '@remixicon/react';
import type { HeaderToolbarProps } from './types';
import { Text } from '../Text';
import { useNavigate, useHref } from 'react-router-dom';
import styles from './Header.module.css';
import clsx from 'clsx';

/**
 * A component that renders a toolbar.
 *
 * @internal
 */
export const HeaderToolbar = (props: HeaderToolbarProps) => {
  const { classNames, cleanedProps } = useStyles('Header', props);
  const { icon, title, titleLink, customActions, hasTabs } = cleanedProps;
  let navigate = useNavigate();

  // Refs for collision detection
  const toolbarWrapperRef = useRef<HTMLDivElement>(null);
  const toolbarContentRef = useRef<HTMLDivElement>(null);
  const toolbarControlsRef = useRef<HTMLDivElement>(null);

  const titleContent = (
    <>
      <div
        className={clsx(classNames.toolbarIcon, styles[classNames.toolbarIcon])}
      >
        {icon || <RiShapesLine />}
      </div>
      <Text variant="body-medium">{title || 'Your plugin'}</Text>
    </>
  );

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div
        className={clsx(classNames.toolbar, styles[classNames.toolbar])}
        data-has-tabs={hasTabs}
      >
        <div
          className={clsx(
            classNames.toolbarWrapper,
            styles[classNames.toolbarWrapper],
          )}
          ref={toolbarWrapperRef}
        >
          <div
            className={clsx(
              classNames.toolbarContent,
              styles[classNames.toolbarContent],
            )}
            ref={toolbarContentRef}
          >
            <Text as="h1" variant="body-medium">
              {titleLink ? (
                <Link
                  className={clsx(
                    classNames.toolbarName,
                    styles[classNames.toolbarName],
                  )}
                  href={titleLink}
                >
                  {titleContent}
                </Link>
              ) : (
                <div
                  className={clsx(
                    classNames.toolbarName,
                    styles[classNames.toolbarName],
                  )}
                >
                  {titleContent}
                </div>
              )}
            </Text>
          </div>
          <div
            className={clsx(
              classNames.toolbarControls,
              styles[classNames.toolbarControls],
            )}
            ref={toolbarControlsRef}
          >
            {customActions}
          </div>
        </div>
      </div>
    </RouterProvider>
  );
};
