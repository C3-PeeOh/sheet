https://jschallenger.com/login/redeem/?linkToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbXlhbi5iLmdlbm92QGdtYWlsLmNvbSIsImV4cCI6MTcxNzU3MDcwOCwidHlwZSI6ImxvZ2luVG9rZW4iLCJpYXQiOjE3MTc0ODQzMDh9.75uXnYn2lVSfelzWYk-MORX-F0MEGnGoTVcEXTc8vEU

https://getcssscan.com/css-checkboxes-examples

Sliding checkbox

<div class="checkbox-wrapper-8">
  <input class="tgl tgl-skewed" id="cb3-8" type="checkbox"/>
  <label class="tgl-btn" data-tg-off="X" data-tg-on="✓" for="cb3-8"></label>
</div>

.checkbox-wrapper-8 {
    display: inline-block;
    font-family: sans-serif;
  }

  .checkbox-wrapper-8 .tgl {
    display: none;
  }

  .checkbox-wrapper-8 .tgl + .tgl-btn {
    outline: 0;
    display: block;
    width: 15px; /* Adjust button width as needed */
    height: 15px; /* Adjust button height as needed */
    position: relative;
    cursor: pointer;
    border: 1px solid #ccc; /* Border for button */
    background-color: #eee; /* Default background color */
    transition: background-color 0.2s ease, box-shadow 0.2s ease; /* Added box-shadow transition */
    overflow: hidden;
  }

  .checkbox-wrapper-8 .tgl + .tgl-btn:before {
    content: attr(data-tg-off);
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 20px; /* Adjust line-height to vertically center text */
    color: #999999; /* Text color for off state */
    background-color: #999999; /* Dark pastel red background for off state */
    transition: left 0.2s ease;
  }

  .checkbox-wrapper-8 .tgl:checked + .tgl-btn:before {
    left: -100%;
  }

  .checkbox-wrapper-8 .tgl + .tgl-btn:after {
    content: attr(data-tg-on);
    display: block;
    position: absolute;
    left: 100%;
    width: 100%;
    text-align: center;
    line-height: 20px; /* Adjust line-height to vertically center text */
    color: #90caf9; /* Text color for on state */
    background-color: #90caf9; /* Pastel blue background for on state */
    box-shadow: 0 0 10px rgba(144, 202, 249, 0.5); /* Glow effect */
    transition: left 0.2s ease, box-shadow 0.2s ease; /* Added box-shadow transition */
  }

  .checkbox-wrapper-8 .tgl:checked + .tgl-btn:after {
    left: 0;
  }