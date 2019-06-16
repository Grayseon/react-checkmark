/**
 * Software distributed under the Apache License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the
 * specific language governing rights and limitations under the License.
 */

import React from 'react';
import './checkmark.css';

export const Checkmark = ({ size }) => {
  return (
    <svg
      className='checkmark'
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: size, height: size }}
      viewBox='0 0 52 52'
    >
      <circle className='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
      <path className='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
    </svg>
  );
};

Checkmark.defaultProps = {
  size: 52,
};