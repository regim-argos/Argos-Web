import React, { useRef, useEffect, useState } from 'react';
import {
  Typography,
  Slider as MUISlider,
  SliderProps,
} from '@material-ui/core';
import { useField } from '@unform/core';

interface ArgosSliderProps extends SliderProps {
  label: string;
}

// import { Container } from './styles';

const Slider: React.FC<ArgosSliderProps> = ({
  name,
  label,
  ...rest
}: ArgosSliderProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name || '');
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        {label}
      </Typography>

      <div style={{ padding: '0 5px' }}>
        <MUISlider
          value={value ?? 60}
          onChange={(e, newValue) => setValue(newValue)}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          {...rest}
        />
        <input ref={inputRef} name={name} type="hidden" value={value} />
      </div>
    </div>
  );
};

export default Slider;
