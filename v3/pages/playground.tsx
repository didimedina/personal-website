import * as React from 'react';
import { css, styled } from '../stitches.config'
import { composeEventHandlers } from '@radix-ui/primitive';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Primitive } from '@radix-ui/react-primitive';

import type * as Radix from '@radix-ui/react-primitive';

/* -------------------------------------------------------------------------------------------------
 * Toggle
 * -----------------------------------------------------------------------------------------------*/

const NAME = 'Toggle';

type ToggleElement = React.ElementRef<typeof Primitive.button>;

type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;

interface ToggleProps extends PrimitiveButtonProps {
  /**
   * The controlled state of the toggle.
   */
  pressed?: boolean;
  /**
   * The state of the toggle when initially rendered. Use `defaultPressed`
   * if you do not need to control the state of the toggle.
   * @defaultValue false
   */
  defaultPressed?: boolean;
  /**
   * The callback that fires when the state of the toggle changes.
   */
  onPressedChange?(pressed: boolean): void;
}

const Toggle = React.forwardRef<ToggleElement, ToggleProps>((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;

  const [pressed = false, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed,
  });

  return (
    <Primitive.button
    type="button"
    aria-pressed={pressed}
    data-state={pressed ? 'on' : 'off'}
      data-disabled={props.disabled ? '' : undefined}
      {...buttonProps}
      ref={forwardedRef}
      onClick={composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })}
    />
  );
});

Toggle.displayName = NAME;

/* ---------------------------------------------------------------------------------------------- */

const Root = Toggle;

export {
  Toggle,
  //
  Root,
};
export type { ToggleProps };


/* Usage --------------------------------------------------- */

const StyledToggle = styled(Root, {
    all: "unset",
    borderRadius: 4,
    display: 'flex',
    fontSize: 15,
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    cursor: "pointer",
    
    backgroundColor: "$slate3",
    color: "$slate11",
    '&[data-state=on]': {
        backgroundColor: "$blue3",
        color: "$blue11"
    },
    '&:focus': { 
        boxShadow: `0 0 0 2px black`,
        outline: "none",
    },
    '&:hover&[data-state=on]': { 
        backgroundColor: "$blue4",
    },
    '&:hover': { 
        backgroundColor: "$slate4",
    },

})

const CenterBox = styled("div", {
    width: "100vw", 
    height: "100vh", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
})

export default function playground() {
   
   return (
       <CenterBox>
           <StyledToggle>Testing</StyledToggle>
       </CenterBox>
   )

}