'use client';

import { useState } from 'react';

type PermissionGroup = { r: boolean; w: boolean; x: boolean };

export default function ChmodCalculator() {
  const [owner, setOwner] = useState<PermissionGroup>({
    r: true,
    w: true,
    x: false,
  });
  const [group, setGroup] = useState<PermissionGroup>({
    r: true,
    w: false,
    x: false,
  });
  const [publicPerms, setPublicPerms] = useState<PermissionGroup>({
    r: true,
    w: false,
    x: false,
  });

  const calculateOctal = (p: PermissionGroup) => {
    let val = 0;
    if (p.r) val += 4;
    if (p.w) val += 2;
    if (p.x) val += 1;
    return val;
  };

  const toSymbolic = (p: PermissionGroup) => {
    return `${p.r ? 'r' : '-'}${p.w ? 'w' : '-'}${p.x ? 'x' : '-'}`;
  };

  const toBin = (p: PermissionGroup) => {
    return `${p.r ? '1' : '0'}${p.w ? '1' : '0'}${p.x ? '1' : '0'}`;
  };

  const ownerOctal = calculateOctal(owner);
  const groupOctal = calculateOctal(group);
  const publicOctal = calculateOctal(publicPerms);

  // Keep a tracked string version so we can properly clear the input down to empty string without 0s appearing
  const [inputValue, setInputValue] = useState(
    `${ownerOctal}${groupOctal}${publicOctal}`,
  );

  const symbolic = `-${toSymbolic(owner)}${toSymbolic(group)}${toSymbolic(publicPerms)}`;
  const binary = `${toBin(owner)} ${toBin(group)} ${toBin(publicPerms)}`;

  // Update function
  const handleToggle = (
    groupName: 'owner' | 'group' | 'public',
    perm: keyof PermissionGroup,
    val: boolean,
  ) => {
    let newOwner = owner;
    let newGroup = group;
    let newPublic = publicPerms;

    if (groupName === 'owner') {
      newOwner = { ...owner, [perm]: val };
      setOwner(newOwner);
    }
    if (groupName === 'group') {
      newGroup = { ...group, [perm]: val };
      setGroup(newGroup);
    }
    if (groupName === 'public') {
      newPublic = { ...publicPerms, [perm]: val };
      setPublicPerms(newPublic);
    }

    setInputValue(
      `${calculateOctal(newOwner)}${calculateOctal(newGroup)}${calculateOctal(newPublic)}`,
    );
  };

  // Convert Octal to state, handling numeric typing from a raw input
  const handleOctalInput = (val: string) => {
    // Only allow digits 0-7, max 3 characters
    if (!/^[0-7]{0,3}$/.test(val)) return;

    setInputValue(val);

    const parseDigit = (char: string | undefined): PermissionGroup => {
      const num = char ? parseInt(char, 10) : 0;
      return {
        r: (num & 4) === 4,
        w: (num & 2) === 2,
        x: (num & 1) === 1,
      };
    };

    setOwner(parseDigit(val[0]));
    setGroup(parseDigit(val[1]));
    setPublicPerms(parseDigit(val[2]));
  };

  // Helper for rendering a column
  const renderColumn = (
    title: string,
    data: PermissionGroup,
    groupName: 'owner' | 'group' | 'public',
  ) => (
    <div className='bg-base-200/50 border-base-content/10 flex flex-col gap-4 rounded-2xl border p-4 shadow-sm sm:p-6'>
      <h3 className='text-center text-sm font-bold tracking-wider uppercase opacity-60'>
        {title}
      </h3>
      <div className='flex flex-col gap-3'>
        <label className='hover:bg-base-200 flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors'>
          <span className='font-mono font-medium'>Read (4)</span>
          <input
            type='checkbox'
            className='toggle toggle-info'
            checked={data.r}
            onChange={(e) => handleToggle(groupName, 'r', e.target.checked)}
          />
        </label>
        <label className='hover:bg-base-200 flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors'>
          <span className='font-mono font-medium'>Write (2)</span>
          <input
            type='checkbox'
            className='toggle toggle-warning'
            checked={data.w}
            onChange={(e) => handleToggle(groupName, 'w', e.target.checked)}
          />
        </label>
        <label className='hover:bg-base-200 flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors'>
          <span className='font-mono font-medium'>Execute (1)</span>
          <input
            type='checkbox'
            className='toggle toggle-error'
            checked={data.x}
            onChange={(e) => handleToggle(groupName, 'x', e.target.checked)}
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className='mx-auto mt-8 flex w-full max-w-4xl flex-col gap-8'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {renderColumn('Owner', owner, 'owner')}
        {renderColumn('Group', group, 'group')}
        {renderColumn('Public', publicPerms, 'public')}
      </div>

      <div className='bg-base-200/50 border-base-content/10 flex flex-col gap-6 rounded-2xl border p-6 text-center sm:p-8 md:text-left'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold tracking-wider uppercase opacity-50'>
              Octal Command
            </h3>
            <div className='flex items-center justify-center gap-3 md:justify-start'>
              <div className='bg-base-100 border-base-content/10 flex items-center gap-2 rounded-xl border px-5 py-3 shadow-inner'>
                <span className='font-mono text-xl opacity-50 sm:text-2xl'>
                  chmod
                </span>
                <input
                  type='text'
                  value={inputValue}
                  onChange={(e) => handleOctalInput(e.target.value)}
                  maxLength={3}
                  className='text-info w-20 bg-transparent font-mono text-2xl outline-none sm:text-4xl'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold tracking-wider uppercase opacity-50'>
              Symbolic
            </h3>
            <div className='flex items-center justify-center gap-3 md:justify-start'>
              <code className='bg-base-100 border-base-content/10 text-warning rounded-xl border px-5 py-3 font-mono text-2xl shadow-inner sm:text-4xl'>
                {symbolic}
              </code>
            </div>
          </div>
        </div>

        <div className='bg-base-content/10 h-px w-full' />

        <div className='flex flex-col gap-2'>
          <h3 className='text-xs font-bold tracking-wider uppercase opacity-50'>
            Binary Format
          </h3>
          <p className='font-mono text-lg tracking-[0.3em] opacity-80'>
            {binary}
          </p>
        </div>
      </div>
    </div>
  );
}
