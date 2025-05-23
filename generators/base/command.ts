/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { JHipsterCommandDefinition } from '../../lib/command/types.js';

const command = {
  options: {
    useVersionPlaceholders: {
      description: 'replace mutable versions with placeholders',
      type: Boolean,
      env: 'VERSION_PLACEHOLDERS',
      scope: 'generator',
      hide: true,
    },
    skipChecks: {
      description: 'Check the status of the required tools',
      type: Boolean,
      scope: 'generator',
    },
    experimental: {
      description:
        'Enable experimental features. Please note that these features may be unstable and may undergo breaking changes at any time',
      type: Boolean,
      scope: 'generator',
    },
    disableBlueprints: {
      description: 'Disable blueprints support',
      type: Boolean,
      scope: 'generator',
    },
    debugEnabled: {
      name: 'debug',
      description: 'Enable debugger',
      alias: 'd',
      type: Boolean,
      scope: 'generator',
    },
    reproducible: {
      description: 'Try to reproduce changelog',
      type: Boolean,
      scope: 'none',
    },
    skipPrompts: {
      description: 'Skip prompts',
      type: Boolean,
      scope: 'generator',
    },
    ignoreNeedlesError: {
      description: 'Ignore needles failures',
      type: Boolean,
      hide: true,
      scope: 'generator',
    },
  },
} as const satisfies JHipsterCommandDefinition;

export default command;
