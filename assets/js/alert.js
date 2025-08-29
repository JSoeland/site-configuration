
  const snackbarData = [
    {
      level: 'High',
      time: '10:02 AM',
      source: 'Inverter 1.A.2',
      title: 'Inverter Fault: Insulation impedance',
      message: 'Insulation impedance may indicate potential leakage current or degraded insulation. This could pose a safety risk and may require inspection before operation can resume'
    },
    {
      level: 'High',
      time: '10:05 AM',
      source: 'Fiber Access Switch 2.C.8',
      title: 'Fiber Loop Alarm',
      message: 'A disruption has been detected in the fiber optic communication loop, which may impact data transmission between connected devices.'
    },
    {
      level: 'Medium',
      time: '10:10 AM',
      source: 'POI Meter',
      title: 'POI Voltage - High out of Schedule',
      message: 'Voltage is higher than the allowed threshold outside of the scheduled operating window, potentially affecting grid compliance or equipment safety'
    }
  ];

  let currentIndex = 0;

  function renderSnackbar(index) {
    const data = snackbarData[index];
    const content = `
      <div class="row">
        <div class="col-lg-1">
          <div class="alarm-pill-${data.level.toLowerCase()}">
            <i class="ti ti-alert-triangle"></i>${data.level}
          </div>
        </div>
        <div class="col-lg-1">${data.time}</div>
        <div class="col-lg-2">${data.source}</div>
        <div class="col-lg-8">
          <h5>${data.title}</h5>${data.message}
        </div>
      </div>
    `;
    document.getElementById('snackbar-content').innerHTML = content;
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + snackbarData.length) % snackbarData.length;
    renderSnackbar(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % snackbarData.length;
    renderSnackbar(currentIndex);
  }

  // Initial render
  document.addEventListener('DOMContentLoaded', () => {
    renderSnackbar(currentIndex);
  });
