import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';
import { useMemo, useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
import { LucideIcon } from 'lucide-react';

type Props<T extends string> = {
  selectedValue: T;
  onSelectedValueChange: (value: T) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  items: { value: T; label: string; icon?: LucideIcon; keywords: string[] }[];
  isLoading?: boolean;
  emptyMessage?: string;
  placeholder?: string;
  formError?: string;
};

export function AutoComplete<T extends string>({
  selectedValue,
  onSelectedValueChange,
  searchValue,
  onSearchValueChange,
  items,
  isLoading,
  emptyMessage = 'No items.',
  placeholder = 'Search...',
  formError,
}: Props<T>) {
  const [open, setOpen] = useState(false);

  const labels = useMemo(
    () =>
      items.reduce((acc, item) => {
        acc[item.value] = item.label;
        return acc;
      }, {} as Record<string, string>),
    [items]
  );

  const reset = () => {
    onSelectedValueChange('' as T);
    onSearchValueChange('');
  };

  const onInputBlur = () => {
    if (selectedValue && searchValue !== labels[selectedValue]) {
      onSearchValueChange(labels[selectedValue]);
    }
    setOpen(false);
  };

  const onSelectItem = (inputValue: string) => {
    if (inputValue === selectedValue) {
      reset();
    } else {
      onSelectedValueChange(inputValue as T);
      onSearchValueChange(labels[inputValue]);
    }
    setOpen(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      selectedValue &&
      searchValue !== labels[selectedValue]
    ) {
      onSearchValueChange(selectedValue);
    }

    setOpen(event.key !== 'Escape' && event.key !== 'Enter');
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <Command shouldFilter={true}>
          <PopoverAnchor asChild>
            <CommandPrimitive.Input
              asChild
              value={searchValue}
              onValueChange={onSearchValueChange}
              onKeyDown={onKeyDown}
              onMouseDown={() => setOpen((open) => !!searchValue || !open)}
              onFocus={() => setOpen(true)}
              onBlur={onInputBlur}>
              <Input placeholder={placeholder} />
            </CommandPrimitive.Input>
          </PopoverAnchor>
          <div className="ml-0.5 text-[0.8rem] font-medium text-destructive">
            {formError}
          </div>
          {!open && <CommandList aria-hidden="true" className="hidden" />}
          <PopoverContent
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute('cmdk-input')
              ) {
                e.preventDefault();
              }
            }}
            className="w-[--radix-popover-trigger-width] p-0">
            <CommandList>
              {isLoading && (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-6 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              )}
              {items.length > 0 && !isLoading ? (
                <CommandGroup>
                  {items.map((option) => (
                    <CommandItem
                      className={cn({
                        'bg-neutral-950 text-neutral-200 data-[selected=true]:text-neutral-200 data-[selected=true]:bg-neutral-950':
                          selectedValue === option.value,
                        'dark:bg-neutral-200 dark:text-neutral-950 dark:data-[selected=true]:text-neutral-950 dark:data-[selected=true]:bg-neutral-200':
                          selectedValue === option.value,
                      })}
                      key={option.value}
                      keywords={[option.label, ...option.keywords]}
                      value={option.value}
                      onMouseDown={(e) => e.preventDefault()}
                      onSelect={onSelectItem}>
                      {option.icon && <option.icon />}
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandEmpty>{emptyMessage ?? 'No items.'}</CommandEmpty>
              ) : null}
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </div>
  );
}
