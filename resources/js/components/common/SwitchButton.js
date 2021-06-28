import React, { useState, useEffect } from 'react';
import { Switch } from '@material-ui/core';

const SwitchButton = ({ handleInputFunction, inputParameter }) => {

    return (
        <Switch
        checked={inputParameter}
        onChange={()=>handleInputFunction()}
      />
    )
}

export default SwitchButton
