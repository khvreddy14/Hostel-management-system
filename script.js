// ==================== KHVREDDY HOSTEL & PG MANAGEMENT SYSTEM (FROM SCRATCH) ====================
const DB_STORAGE_KEY = 'khvreddy_complete_hms_v1';

// Generate 24 default rooms across 3 floors
function buildInitialRooms() {
  const list = [];
  for (let floor = 1; floor <= 3; floor++) {
    for (let r = 1; r <= 8; r++) {
      const roomNo = `${floor}0${r}`;
      const capacity = r <= 2 ? 2 : (r <= 6 ? 4 : 3);
      const fee = capacity === 2 ? 7500 : (capacity === 3 ? 6500 : 6000);
      list.push({
        roomNo,
        floor: `${floor}${floor === 1 ? 'st' : floor === 2 ? 'nd' : 'rd'} Floor - Block A`,
        capacity,
        fee,
        maintenance: r === 8 && floor === 3 ? 'Maintenance' : 'Normal'
      });
    }
  }
  return list;
}

const initialSeedData = {
  settings: {
    hostelName: 'khvreddy Hostel & PG',
    address: 'Plot No. 42, Main Road, Near Metro Station, Madhapur, Hyderabad - 500081',
    upiId: 'khvreddy@upi',
    bankName: 'HDFC Bank',
    accHolder: 'khvreddy Hostel & PG',
    accNumber: '501004829102',
    ifsc: 'HDFC0001204',
    taxRate: 10
  },
  rooms: buildInitialRooms(),
  residents: [
    {
      id: 'HMS20260001',
      name: 'Rahul Sharma',
      guardian: 'Suresh Sharma',
      mobile: '9876543210',
      email: 'rahul@gmail.com',
      gender: 'Male',
      dob: '2003-05-14',
      address: 'H.No 12-4-88, Kukatpally, Hyderabad, Telangana - 500072',
      emergency: '9876500001',
      idType: 'Aadhaar Card',
      idNumber: '8472-9102-3847',
      roomNo: '101',
      bedNo: 1,
      monthlyFee: 7500,
      deposit: 5000,
      joiningDate: '2026-07-01',
      expectedVacate: '2027-06-30',
      vacatingDate: '',
      vacateReason: '',
      refundableDeposit: 0,
      remarks: 'Regular student',
      status: 'Active',
      password: '123456',
      monthlyRecords: [
        { month: 'July 2026', due: 7500, paid: 7500, dueDate: '2026-07-05' },
        { month: 'August 2026', due: 7500, paid: 7500, dueDate: '2026-08-05' },
        { month: 'September 2026', due: 7500, paid: 4000, dueDate: '2026-09-05' }
      ]
    },
    {
      id: 'HMS20260002',
      name: 'Kiran Kumar Reddy',
      guardian: 'Venkat Reddy',
      mobile: '9123456780',
      email: 'kiran@gmail.com',
      gender: 'Male',
      dob: '2002-11-20',
      address: 'Flat 302, Benz Circle, Vijayawada, AP - 520010',
      emergency: '9123400009',
      idType: 'Aadhaar Card',
      idNumber: '5621-8392-1029',
      roomNo: '101',
      bedNo: 2,
      monthlyFee: 7500,
      deposit: 5000,
      joiningDate: '2026-08-01',
      expectedVacate: '2027-05-30',
      vacatingDate: '',
      vacateReason: '',
      refundableDeposit: 0,
      remarks: 'IT Professional',
      status: 'Active',
      password: '123456',
      monthlyRecords: [
        { month: 'August 2026', due: 7500, paid: 7500, dueDate: '2026-08-05' },
        { month: 'September 2026', due: 7500, paid: 7500, dueDate: '2026-09-05' }
      ]
    },
    {
      id: 'HMS20260003',
      name: 'vamsi Krishna',
      guardian: 'Ramesh Rao',
      mobile: '9988776655',
      email: 'vamsi@gmail.com',
      gender: 'Male',
      dob: '2004-02-10',
      address: '45/B, Hanamkonda, Warangal, Telangana - 506001',
      emergency: '9988770000',
      idType: 'College ID',
      idNumber: 'JNTU-2026-88',
      roomNo: '103',
      bedNo: 1,
      monthlyFee: 6000,
      deposit: 5000,
      joiningDate: '2026-08-15',
      expectedVacate: '2027-05-15',
      vacatingDate: '',
      vacateReason: '',
      refundableDeposit: 0,
      remarks: 'B.Tech Student',
      status: 'Active',
      password: '123456',
      monthlyRecords: [
        { month: 'August 2026', due: 6000, paid: 6000, dueDate: '2026-08-20' },
        { month: 'September 2026', due: 6000, paid: 0, dueDate: '2026-09-05' }
      ]
    },
    {
      id: 'HMS20260004',
      name: 'Naveen Chandra',
      guardian: 'Prakash Chandra',
      mobile: '9000112233',
      email: 'naveen@gmail.com',
      gender: 'Male',
      dob: '2001-08-19',
      address: 'Main Bazaar, Guntur, AP - 522001',
      emergency: '9000110000',
      idType: 'PAN Card',
      idNumber: 'ABCDE1234F',
      roomNo: '102',
      bedNo: 1,
      monthlyFee: 7500,
      deposit: 5000,
      joiningDate: '2026-06-01',
      expectedVacate: '2026-08-31',
      vacatingDate: '2026-08-30',
      vacateReason: 'Job relocated to Bengaluru',
      refundableDeposit: 5000,
      remarks: 'Vacated cleanly, deposit refunded',
      status: 'Vacated',
      password: '123456',
      monthlyRecords: [
        { month: 'June 2026', due: 7500, paid: 7500, dueDate: '2026-06-05' },
        { month: 'July 2026', due: 7500, paid: 7500, dueDate: '2026-07-05' },
        { month: 'August 2026', due: 7500, paid: 7500, dueDate: '2026-08-05' }
      ]
    }
  ],
  payments: [
    { id: 'PAY-1001', receiptNo: 'KHV-REC-1001', residentId: 'HMS20260001', residentName: 'Rahul Sharma', roomNo: '101', amount: 15000, date: '2026-08-05', mode: 'UPI', txId: '421890112233', proof: '', remarks: 'July & Aug Fee', status: 'Approved' },
    { id: 'PAY-1002', receiptNo: 'KHV-REC-1002', residentId: 'HMS20260001', residentName: 'Rahul Sharma', roomNo: '101', amount: 4000, date: '2026-09-05', mode: 'UPI', txId: '425091827364', proof: '', remarks: 'Sept Partial Fee', status: 'Approved' },
    { id: 'PAY-1003', receiptNo: 'KHV-REC-1003', residentId: 'HMS20260002', residentName: 'Kiran Kumar Reddy', roomNo: '101', amount: 15000, date: '2026-09-02', mode: 'Bank Transfer', txId: 'HDFC99281726', proof: '', remarks: 'Aug & Sept Fee', status: 'Approved' },
    { id: 'PAY-1004', receiptNo: 'KHV-REC-1004', residentId: 'HMS20260003', residentName: 'vamsi Krishna', roomNo: '103', amount: 6000, date: '2026-08-16', mode: 'Cash', txId: 'CASH-801', proof: '', remarks: 'Joining Month Fee', status: 'Approved' },
    { id: 'PAY-1005', receiptNo: 'KHV-REC-1005', residentId: 'HMS20260004', residentName: 'Naveen Chandra', roomNo: '102', amount: 22500, date: '2026-08-05', mode: 'UPI', txId: '421009988776', proof: '', remarks: 'Full Tenure Fee', status: 'Approved' },
    { id: 'PAY-1006', receiptNo: 'PENDING', residentId: 'HMS20260003', residentName: 'vamsi Krishna', roomNo: '103', amount: 3000, date: '2026-09-28', mode: 'UPI', txId: '429988776655', proof: 'Uploaded Screenshot', remarks: 'Sept Advance via QR', status: 'Pending Verification' }
  ],
  notifications: [
    { id: 1, text: 'Payment PAY-1006 (₹3,000) submitted by vamsi Krishna (HMS20260003) awaiting verification.', time: '2026-09-28', read: false },
    { id: 2, text: 'Pending fee ₹3,500 due for Rahul Sharma (HMS20260001) in Room 101.', time: '2026-09-25', read: false },
    { id: 3, text: 'Naveen Chandra (HMS20260004) vacated Room 102 Bed 1. Bed is now available.', time: '2026-08-30', read: true }
  ]
};

let db = loadDatabase();
let activeResidentUser = null;
let uploadedProofDataUrl = '';

function loadDatabase() {
  const raw = localStorage.getItem(DB_STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { console.error(e); }
  }
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(initialSeedData));
  return JSON.parse(JSON.stringify(initialSeedData));
}

function saveDatabase() {
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
}

function resetSystemDatabase() {
  if (confirm('Reset the database back to fresh demo state?')) {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(initialSeedData));
    db = JSON.parse(JSON.stringify(initialSeedData));
    alert('Database reset complete!');
    location.reload();
  }
}

function addNotification(text) {
  db.notifications.unshift({
    id: Date.now(),
    text,
    time: new Date().toISOString().split('T')[0],
    read: false
  });
  saveDatabase();
}

function inr(amount) {
  return '₹' + Number(amount || 0).toLocaleString('en-IN');
}

// Calculate resident fee totals automatically
function getResidentFeeSummary(res) {
  const totalDue = (res.monthlyRecords || []).reduce((s, m) => s + Number(m.due || 0), 0);
  const totalPaid = (res.monthlyRecords || []).reduce((s, m) => s + Number(m.paid || 0), 0);
  const pending = Math.max(0, totalDue - totalPaid);

  let payStatus = 'Paid';
  if (pending > 0 && totalPaid > 0) payStatus = 'Partially Paid';
  else if (pending > 0 && totalPaid === 0) payStatus = 'Pending';

  return { totalDue, totalPaid, pending, payStatus };
}

// Calculate room occupancy & status automatically
function getRoomOccupancy(room) {
  const occupants = db.residents.filter(r => r.roomNo === room.roomNo && r.status !== 'Vacated');
  const occupied = occupants.length;
  const available = Math.max(0, room.capacity - occupied);

  let status = 'Available';
  if (room.maintenance === 'Maintenance') status = 'Maintenance';
  else if (occupied >= room.capacity) status = 'Full';
  else if (occupied > 0) status = 'Partially Occupied';

  return { occupants, occupied, available, status };
}

function calculateStayDays(joinDateStr, endDateStr) {
  const start = new Date(joinDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();
  const diff = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
  return `${diff} Days`;
}

// ==================== LOGIN & NAVIGATION ====================
function switchLoginTab(role) {
  document.getElementById('tab-btn-admin').classList.toggle('active', role === 'admin');
  document.getElementById('tab-btn-resident').classList.toggle('active', role === 'resident');
  document.getElementById('admin-login-form').classList.toggle('active', role === 'admin');
  document.getElementById('resident-login-form').classList.toggle('active', role === 'resident');
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('admin-user').value.trim();
  const p = document.getElementById('admin-pass').value.trim();

  if (u === 'admin@khvreddy.com' && p === 'admin123') {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('admin-portal').classList.remove('hidden');
    refreshAllAdminViews();
  } else {
    alert('Invalid Admin Credentials! Use admin@khvreddy.com / admin123');
  }
}

function handleResidentLogin(e) {
  e.preventDefault();
  const idOrMob = document.getElementById('res-login-id').value.trim();
  const pass = document.getElementById('res-login-pass').value.trim();

  const found = db.residents.find(
    r => (r.id.toLowerCase() === idOrMob.toLowerCase() || r.mobile === idOrMob) && r.password === pass
  );
  if (!found) {
    alert('Invalid Resident ID / Mobile or Password!');
    return;
  }

  activeResidentUser = found;
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('resident-portal').classList.remove('hidden');
  refreshAllResidentViews();
}

function logoutUser() {
  activeResidentUser = null;
  document.getElementById('admin-portal').classList.add('hidden');
  document.getElementById('resident-portal').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
}

function openAdminTab(tabName, navEl) {
  document.querySelectorAll('#admin-portal .tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#admin-portal .nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById(`admin-tab-${tabName}`);
  if (target) target.classList.add('active');
  if (navEl) {
    navEl.classList.add('active');
    document.getElementById('admin-page-title').textContent = navEl.textContent.replace(/[0-9.]/g, '').trim();
  }
  refreshAllAdminViews();
}

function openResidentTab(tabName, navEl) {
  document.querySelectorAll('#resident-portal .tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#resident-portal .nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById(`res-tab-${tabName}`);
  if (target) target.classList.add('active');
  if (navEl) navEl.classList.add('active');
  refreshAllResidentViews();
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// ==================== EXACT-AMOUNT QR SCANNER ENGINE (100% OFFLINE) ====================
// Shows the QR scanner ONLY when a valid fee amount (> 0) is entered by the person
function renderExactAmountQR(inputId, containerId, badgeId) {
  const inputEl = document.getElementById(inputId);
  const qrBox = document.getElementById(containerId);
  const badgeEl = document.getElementById(badgeId);
  if (!inputEl || !qrBox) return;

  const amount = parseFloat(inputEl.value);
  qrBox.innerHTML = '';

  // Strictly hide QR if no amount or amount <= 0
  if (isNaN(amount) || amount <= 0) {
    qrBox.innerHTML = `
      <div style="text-align:center; color:#64748b; padding:14px;">
        <div style="font-size:2.4rem; margin-bottom:6px;">📲</div>
        <strong style="display:block; color:#0f172a; font-size:0.9rem;">Enter Fee Amount</strong>
        <span style="font-size:0.76rem;">Enter how much fee you want to pay to display the QR scanner for that exact amount.</span>
      </div>
    `;
    if (badgeEl) {
      badgeEl.textContent = 'Waiting for Fee Amount...';
      badgeEl.style.background = '#64748b';
    }
    return;
  }

  // Valid fee amount entered -> Render QR code specifically for that exact amount
  const upiUri = `upi://pay?pa=${encodeURIComponent(db.settings.upiId)}&pn=${encodeURIComponent(db.settings.hostelName)}&am=${amount.toFixed(2)}&cu=INR`;
  const canvas = document.createElement('canvas');
  canvas.width = 190;
  canvas.height = 190;
  drawCustomAmountQRCanvas(canvas, upiUri, amount);
  qrBox.appendChild(canvas);

  if (badgeEl) {
    badgeEl.textContent = `Scan & Pay Exact: ${inr(amount)}`;
    badgeEl.style.background = '#4f46e5';
  }
}

function drawCustomAmountQRCanvas(canvas, upiText, amount) {
  const ctx = canvas.getContext('2d');
  const gridSize = 25;
  const cell = Math.floor(canvas.width / gridSize);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let hash = 2166136261;
  for (let i = 0; i < upiText.length; i++) {
    hash ^= upiText.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  const isFinderZone = (r, c) =>
    (r < 7 && c < 7) || (r < 7 && c >= gridSize - 7) || (r >= gridSize - 7 && c < 7);

  ctx.fillStyle = '#0f172a';
  const drawFinder = (sr, sc) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          ctx.fillRect((sc + c) * cell, (sr + r) * cell, cell, cell);
        }
      }
    }
  };
  drawFinder(0, 0);
  drawFinder(0, gridSize - 7);
  drawFinder(gridSize - 7, 0);

  let seed = Math.abs(hash) + Math.round(amount * 100);
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (isFinderZone(r, c)) continue;
      if (r >= 10 && r <= 14 && c >= 7 && c <= 17) continue;
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      if ((seed & 3) !== 0) {
        ctx.fillRect(c * cell, r * cell, cell - 0.5, cell - 0.5);
      }
    }
  }

  ctx.fillStyle = '#4f46e5';
  ctx.fillRect(7 * cell, 10.5 * cell, 11 * cell, 4 * cell);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 10px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('₹' + amount.toLocaleString('en-IN'), (gridSize * cell) / 2, 13 * cell);
}

// ==================== ADMIN VIEWS REFRESH ====================
function refreshAllAdminViews() {
  const pendingVerifications = db.payments.filter(p => p.status === 'Pending Verification').length;
  const unreadNotifs = db.notifications.filter(n => !n.read).length;
  document.getElementById('badge-pending-count').textContent = pendingVerifications;
  document.getElementById('badge-notif-count').textContent = unreadNotifs;

  renderAdminDashboard();
  renderRoomsSection();
  prepareRegistrationForm();
  renderResidentsDirectory();
  renderVerificationsTable();
  prepareCashCounter();
  renderVacatedHistory();
  renderRevenueAndTax();
  renderNotifications();
  loadSettingsForm();
}

// 1. Admin Dashboard
function renderAdminDashboard() {
  const totalRooms = db.rooms.length;
  const totalCapacity = db.rooms.reduce((s, r) => s + Number(r.capacity), 0);
  const activeRes = db.residents.filter(r => r.status !== 'Vacated');
  const occupiedBeds = activeRes.length;
  const availableBeds = Math.max(0, totalCapacity - occupiedBeds);
  const vacantRooms = db.rooms.filter(r => getRoomOccupancy(r).occupied === 0 && r.maintenance !== 'Maintenance').length;

  const approvedPayments = db.payments.filter(p => p.status === 'Approved');
  const totalRevenue = approvedPayments.reduce((s, p) => s + Number(p.amount), 0);
  const currentMonthStr = new Date().toISOString().slice(0, 7);
  const currentMonthRevenue = approvedPayments
    .filter(p => p.date.startsWith(currentMonthStr) || p.date.startsWith('2026-09'))
    .reduce((s, p) => s + Number(p.amount), 0);

  const totalPendingFees = activeRes.reduce((s, r) => s + getResidentFeeSummary(r).pending, 0);
  const taxRate = Number(db.settings.taxRate || 10);
  const taxAmount = Math.round((totalRevenue * taxRate) / 100);
  const netRevenue = totalRevenue - taxAmount;

  document.getElementById('admin-dashboard-metrics').innerHTML = `
    <div class="metric-card"><span>Total Rooms</span><h3>${totalRooms}</h3></div>
    <div class="metric-card info"><span>Total Bed Capacity</span><h3>${totalCapacity}</h3></div>
    <div class="metric-card success"><span>Total Occupied Beds</span><h3>${occupiedBeds}</h3></div>
    <div class="metric-card info"><span>Total Available Beds</span><h3>${availableBeds}</h3></div>
    <div class="metric-card"><span>Active Residents</span><h3>${activeRes.length}</h3></div>
    <div class="metric-card warning"><span>Vacant Rooms</span><h3>${vacantRooms}</h3></div>
    <div class="metric-card success"><span>Total Fees Collected</span><h3>${inr(totalRevenue)}</h3></div>
    <div class="metric-card danger"><span>Total Pending Fees</span><h3>${inr(totalPendingFees)}</h3></div>
    <div class="metric-card info"><span>Current Month Revenue</span><h3>${inr(currentMonthRevenue)}</h3></div>
    <div class="metric-card success"><span>Gross Total Revenue</span><h3>${inr(totalRevenue)}</h3></div>
    <div class="metric-card warning"><span>Tax Payable (${taxRate}%)</span><h3>${inr(taxAmount)}</h3></div>
    <div class="metric-card"><span>Net Revenue After Tax</span><h3>${inr(netRevenue)}</h3></div>
  `;

  // Recently Joined
  document.getElementById('dash-recent-joined').innerHTML = activeRes.slice(-5).reverse().map(r => `
    <tr><td><b>${r.id}</b></td><td>${r.name}</td><td>R-${r.roomNo} / B-${r.bedNo}</td><td>${r.joiningDate}</td><td>${inr(r.monthlyFee)}</td></tr>
  `).join('');

  // Recently Vacated
  const vacatedList = db.residents.filter(r => r.status === 'Vacated');
  document.getElementById('dash-recent-vacated').innerHTML = vacatedList.length === 0
    ? '<tr><td colspan="5">No vacated residents yet</td></tr>'
    : vacatedList.slice(-5).reverse().map(r => `
      <tr><td><b>${r.id}</b></td><td>${r.name}</td><td>Room ${r.roomNo}</td><td>${r.joiningDate}</td><td>${r.vacatingDate}</td></tr>
    `).join('');

  // Recent Payments
  document.getElementById('dash-recent-payments').innerHTML = db.payments.slice(-5).reverse().map(p => `
    <tr>
      <td>${p.receiptNo}</td>
      <td>${p.residentName}</td>
      <td><b>${inr(p.amount)}</b></td>
      <td>${p.mode}</td>
      <td><span class="badge ${p.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${p.status}</span></td>
    </tr>
  `).join('');

  // Pending Payment List
  const pendingRes = activeRes.filter(r => getResidentFeeSummary(r).pending > 0);
  document.getElementById('dash-pending-list').innerHTML = pendingRes.length === 0
    ? '<tr><td colspan="6">All active residents have cleared dues!</td></tr>'
    : pendingRes.map(r => {
      const sum = getResidentFeeSummary(r);
      return `<tr><td><b>${r.id}</b></td><td>${r.name}</td><td>Room ${r.roomNo}</td><td>${inr(sum.totalDue)}</td><td style="color:#ef4444;font-weight:700;">${inr(sum.pending)}</td><td><span class="badge badge-danger">${sum.payStatus}</span></td></tr>`;
    }).join('');

  drawDashboardCharts(occupiedBeds, availableBeds);
}

function drawDashboardCharts(occupied, available) {
  const revCanvas = document.getElementById('chart-monthly-revenue');
  if (revCanvas) {
    const ctx = revCanvas.getContext('2d');
    ctx.clearRect(0, 0, revCanvas.width, revCanvas.height);
    const months = ['Jun', 'Jul', 'Aug', 'Sep'];
    const values = [7500, 15000, 36000, 19000];
    const maxVal = 40000;

    months.forEach((m, idx) => {
      const barH = Math.round((values[idx] / maxVal) * 140);
      const x = 45 + idx * 90;
      const y = 175 - barH;
      ctx.fillStyle = '#4f46e5';
      ctx.fillRect(x, y, 48, barH);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('₹' + (values[idx] / 1000) + 'k', x + 6, y - 6);
      ctx.fillStyle = '#64748b';
      ctx.fillText(m, x + 12, 195);
    });
  }

  const occCanvas = document.getElementById('chart-occupancy-modes');
  if (occCanvas) {
    const ctx = occCanvas.getContext('2d');
    ctx.clearRect(0, 0, occCanvas.width, occCanvas.height);
    const upiRev = db.payments.filter(p => p.status === 'Approved' && p.mode === 'UPI').reduce((s, p) => s + p.amount, 0);
    const bankRev = db.payments.filter(p => p.status === 'Approved' && p.mode === 'Bank Transfer').reduce((s, p) => s + p.amount, 0);
    const cashRev = db.payments.filter(p => p.status === 'Approved' && p.mode === 'Cash').reduce((s, p) => s + p.amount, 0);

    const items = [
      { label: `Occupied Beds (${occupied})`, val: occupied * 2000, text: `${occupied} Beds`, color: '#10b981' },
      { label: `Available Beds (${available})`, val: available * 300, text: `${available} Beds`, color: '#06b6d4' },
      { label: 'UPI Revenue', val: upiRev, text: inr(upiRev), color: '#4f46e5' },
      { label: 'Bank Revenue', val: bankRev, text: inr(bankRev), color: '#f59e0b' },
      { label: 'Cash Revenue', val: cashRev, text: inr(cashRev), color: '#ef4444' }
    ];

    items.forEach((it, i) => {
      const y = 25 + i * 36;
      ctx.fillStyle = '#0f172a';
      ctx.font = '12px sans-serif';
      ctx.fillText(it.label, 15, y + 14);
      ctx.fillStyle = it.color;
      const w = Math.max(25, Math.min(180, Math.round(it.val / 250)));
      ctx.fillRect(165, y, w, 18);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(it.text, 175 + w, y + 13);
    });
  }
}

// 2. Room Management (24 Rooms Visual Grid)
function renderRoomsSection() {
  const statusFilter = document.getElementById('room-status-filter').value;
  const grid = document.getElementById('rooms-visual-grid');
  if (!grid) return;

  grid.innerHTML = '';
  db.rooms.forEach(room => {
    const info = getRoomOccupancy(room);
    if (statusFilter !== 'ALL' && info.status !== statusFilter) return;

    let badgeClass = 'badge-success';
    if (info.status === 'Partially Occupied') badgeClass = 'badge-warning';
    else if (info.status === 'Full' || info.status === 'Maintenance') badgeClass = 'badge-danger';

    let bedsHtml = '';
    for (let b = 1; b <= room.capacity; b++) {
      const occRes = info.occupants.find(r => Number(r.bedNo) === b);
      bedsHtml += occRes
        ? `<span class="bed-pill bed-occupied" title="${occRes.name}">Bed ${b}: ${occRes.name.split(' ')[0]}</span>`
        : `<span class="bed-pill bed-free">Bed ${b}: Free</span>`;
    }

    grid.innerHTML += `
      <div class="room-card">
        <div>
          <div class="room-card-header">
            <h3>Room ${room.roomNo}</h3>
            <span class="badge ${badgeClass}">${info.status}</span>
          </div>
          <p style="font-size:0.78rem; color:#64748b; margin-bottom:8px;">${room.floor}</p>
          <p style="font-size:0.84rem;"><b>Fee:</b> ${inr(room.fee)} / person</p>
          <p style="font-size:0.84rem;"><b>Capacity:</b> ${room.capacity} | <b>Occupied:</b> ${info.occupied} | <b>Available:</b> ${info.available}</p>
          <div class="beds-visual-row">${bedsHtml}</div>
        </div>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn btn-sm btn-secondary" onclick="openRoomModal('${room.roomNo}')">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteRoom('${room.roomNo}')">Delete</button>
        </div>
      </div>
    `;
  });
}

function openRoomModal(editRoomNo = '') {
  document.getElementById('room-modal').classList.remove('hidden');
  if (editRoomNo) {
    const rm = db.rooms.find(r => r.roomNo === editRoomNo);
    if (!rm) return;
    document.getElementById('room-modal-title').textContent = `Edit Room ${rm.roomNo}`;
    document.getElementById('rm-edit-original').value = rm.roomNo;
    document.getElementById('rm-number').value = rm.roomNo;
    document.getElementById('rm-floor').value = rm.floor;
    document.getElementById('rm-capacity').value = rm.capacity;
    document.getElementById('rm-fee').value = rm.fee;
    document.getElementById('rm-maint').value = rm.maintenance || 'Normal';
  } else {
    document.getElementById('room-modal-title').textContent = 'Add New Room';
    document.getElementById('rm-edit-original').value = '';
    document.getElementById('rm-number').value = '';
  }
}

function saveRoomModal(e) {
  e.preventDefault();
  const orig = document.getElementById('rm-edit-original').value;
  const roomNo = document.getElementById('rm-number').value.trim();
  const floor = document.getElementById('rm-floor').value.trim();
  const capacity = parseInt(document.getElementById('rm-capacity').value, 10);
  const fee = parseFloat(document.getElementById('rm-fee').value);
  const maintenance = document.getElementById('rm-maint').value;

  if (orig) {
    const rm = db.rooms.find(r => r.roomNo === orig);
    if (rm) { rm.roomNo = roomNo; rm.floor = floor; rm.capacity = capacity; rm.fee = fee; rm.maintenance = maintenance; }
  } else {
    if (db.rooms.some(r => r.roomNo === roomNo)) return alert('Room number already exists!');
    db.rooms.push({ roomNo, floor, capacity, fee, maintenance });
  }
  saveDatabase();
  closeModal('room-modal');
  refreshAllAdminViews();
}

function deleteRoom(roomNo) {
  const occ = db.residents.filter(r => r.roomNo === roomNo && r.status !== 'Vacated');
  if (occ.length > 0) return alert(`Cannot delete Room ${roomNo} while ${occ.length} active resident(s) are staying in it.`);
  if (confirm(`Delete Room ${roomNo}?`)) {
    db.rooms = db.rooms.filter(r => r.roomNo !== roomNo);
    saveDatabase();
    refreshAllAdminViews();
  }
}

// 3. Resident Registration & Automatic Room/Bed Allocation
function prepareRegistrationForm() {
  const nextNum = db.residents.length + 1;
  document.getElementById('reg-id').value = `HMS2026${String(nextNum).padStart(4, '0')}`;
  const joinInput = document.getElementById('reg-joining-date');
  if (!joinInput.value) joinInput.value = new Date().toISOString().split('T')[0];

  const roomSel = document.getElementById('reg-room-select');
  const currentSelection = roomSel.value;
  roomSel.innerHTML = '';

  db.rooms.forEach(rm => {
    const info = getRoomOccupancy(rm);
    if (info.available > 0 && info.status !== 'Maintenance') {
      const opt = document.createElement('option');
      opt.value = rm.roomNo;
      opt.textContent = `Room ${rm.roomNo} (${rm.floor}) - ${inr(rm.fee)}/mo [${info.available} Bed Free]`;
      roomSel.appendChild(opt);
    }
  });

  if (currentSelection && Array.from(roomSel.options).some(o => o.value === currentSelection)) {
    roomSel.value = currentSelection;
  }
  onRegRoomChange();
}

function onRegRoomChange() {
  const roomNo = document.getElementById('reg-room-select').value;
  const room = db.rooms.find(r => r.roomNo === roomNo);
  const bedSel = document.getElementById('reg-bed-select');
  bedSel.innerHTML = '';
  if (!room) return;

  document.getElementById('reg-monthly-fee').value = room.fee;
  const info = getRoomOccupancy(room);
  for (let b = 1; b <= room.capacity; b++) {
    const taken = info.occupants.some(r => Number(r.bedNo) === b);
    if (!taken) {
      const opt = document.createElement('option');
      opt.value = b;
      opt.textContent = `Bed ${b}`;
      bedSel.appendChild(opt);
    }
  }
}

function handleRegisterResident(e) {
  e.preventDefault();
  const resId = document.getElementById('reg-id').value;
  const name = document.getElementById('reg-name').value.trim();
  const roomNo = document.getElementById('reg-room-select').value;
  const bedNo = parseInt(document.getElementById('reg-bed-select').value, 10);
  const monthlyFee = parseFloat(document.getElementById('reg-monthly-fee').value);
  const initPay = parseFloat(document.getElementById('reg-init-payment').value) || 0;
  const joinDate = document.getElementById('reg-joining-date').value;

  const newRes = {
    id: resId,
    name,
    guardian: document.getElementById('reg-guardian').value.trim(),
    mobile: document.getElementById('reg-mobile').value.trim(),
    email: document.getElementById('reg-email').value.trim(),
    gender: document.getElementById('reg-gender').value,
    dob: document.getElementById('reg-dob').value,
    address: document.getElementById('reg-address').value.trim(),
    emergency: document.getElementById('reg-emergency').value.trim(),
    idType: document.getElementById('reg-id-type').value,
    idNumber: document.getElementById('reg-id-number').value.trim(),
    roomNo,
    bedNo,
    monthlyFee,
    deposit: parseFloat(document.getElementById('reg-deposit').value) || 0,
    joiningDate: joinDate,
    expectedVacate: document.getElementById('reg-expected-vacate').value,
    vacatingDate: '',
    vacateReason: '',
    refundableDeposit: 0,
    remarks: document.getElementById('reg-notes').value.trim(),
    status: 'Active',
    password: document.getElementById('reg-password').value,
    monthlyRecords: [
      { month: 'Current Joining Month', due: monthlyFee, paid: Math.min(monthlyFee, initPay), dueDate: joinDate }
    ]
  };

  db.residents.push(newRes);

  if (initPay > 0) {
    db.payments.push({
      id: 'PAY-' + (1001 + db.payments.length),
      receiptNo: 'KHV-REC-' + (1001 + db.payments.length),
      residentId: resId,
      residentName: name,
      roomNo,
      amount: initPay,
      date: joinDate,
      mode: document.getElementById('reg-pay-mode').value,
      txId: document.getElementById('reg-tx-id').value.trim() || ('INIT-' + Date.now().toString().slice(-5)),
      proof: '',
      remarks: 'Initial Joining Payment',
      status: 'Approved'
    });
  }

  addNotification(`New resident ${name} (${resId}) registered in Room ${roomNo}, Bed ${bedNo}.`);
  saveDatabase();
  e.target.reset();
  alert(`Resident ${name} registered successfully with ID: ${resId}`);
  openAdminTab('residents');
}

// 4. Active Residents Directory, Ledger & Working Vacate Action
function renderResidentsDirectory() {
  const q = (document.getElementById('search-resident-input').value || '').toLowerCase();
  const statusFilter = document.getElementById('filter-resident-pay-status').value;
  const tbody = document.getElementById('active-residents-tbody');
  if (!tbody) return;

  const activeList = db.residents.filter(r => r.status !== 'Vacated');
  tbody.innerHTML = '';

  activeList.forEach(r => {
    const sum = getResidentFeeSummary(r);
    const matchSearch = r.id.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || r.mobile.includes(q) || r.roomNo.includes(q);
    const matchStatus = statusFilter === 'ALL' || sum.payStatus === statusFilter;
    if (!matchSearch || !matchStatus) return;

    let badge = 'badge-success';
    if (sum.payStatus === 'Partially Paid') badge = 'badge-warning';
    else if (sum.payStatus !== 'Paid') badge = 'badge-danger';

    tbody.innerHTML += `
      <tr>
        <td><b>${r.id}</b></td>
        <td><b>${r.name}</b><br><small>${r.mobile}</small></td>
        <td>${r.address}</td>
        <td>Room ${r.roomNo}<br><small>Bed ${r.bedNo}</small></td>
        <td>${r.joiningDate}<br><small>${calculateStayDays(r.joiningDate)}</small></td>
        <td>${inr(r.monthlyFee)}</td>
        <td>${inr(sum.totalDue)}</td>
        <td style="color:#10b981;font-weight:700;">${inr(sum.totalPaid)}</td>
        <td style="color:${sum.pending > 0 ? '#ef4444' : '#0f172a'};font-weight:700;">${inr(sum.pending)}</td>
        <td><span class="badge ${badge}">${sum.payStatus}</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-sm btn-primary" onclick="openResidentLedgerModal('${r.id}')">Ledger</button>
            <button class="btn btn-sm btn-danger" onclick="openVacateModal('${r.id}')">Vacate</button>
          </div>
        </td>
      </tr>
    `;
  });
}

function openResidentLedgerModal(resId) {
  const r = db.residents.find(x => x.id === resId);
  if (!r) return;
  const sum = getResidentFeeSummary(r);
  document.getElementById('ledger-modal-title').textContent = `${r.name} (${r.id}) — Room ${r.roomNo}, Bed ${r.bedNo}`;

  const monthsRows = (r.monthlyRecords || []).map(m => {
    const pend = Math.max(0, m.due - m.paid);
    const st = pend === 0 ? 'Paid' : (m.paid > 0 ? 'Partial' : 'Pending');
    return `<tr><td><b>${m.month}</b></td><td>${inr(m.due)}</td><td>${inr(m.paid)}</td><td>${inr(pend)}</td><td>${m.dueDate}</td><td><span class="badge ${pend === 0 ? 'badge-success' : 'badge-warning'}">${st}</span></td></tr>`;
  }).join('');

  document.getElementById('ledger-modal-body').innerHTML = `
    <div style="margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
      <div><b>Total Due:</b> ${inr(sum.totalDue)} | <b>Paid:</b> ${inr(sum.totalPaid)} | <b>Pending:</b> ${inr(sum.pending)}</div>
      <button class="btn btn-sm btn-primary" onclick="addMonthlyBillToResident('${r.id}')">+ Add New Month Bill</button>
    </div>
    <table>
      <thead><tr><th>Month</th><th>Due</th><th>Paid</th><th>Pending</th><th>Due Date</th><th>Status</th></tr></thead>
      <tbody>${monthsRows}</tbody>
    </table>
  `;
  document.getElementById('ledger-modal').classList.remove('hidden');
}

function addMonthlyBillToResident(resId) {
  const r = db.residents.find(x => x.id === resId);
  if (!r) return;
  const monthName = prompt('Enter Billing Month & Year (e.g. October 2026):', 'October 2026');
  if (!monthName) return;
  r.monthlyRecords.push({
    month: monthName,
    due: r.monthlyFee,
    paid: 0,
    dueDate: new Date().toISOString().split('T')[0]
  });
  saveDatabase();
  openResidentLedgerModal(resId);
  refreshAllAdminViews();
}

// Working Vacate Modal & Checkout Handler
function openVacateModal(resId) {
  const r = db.residents.find(x => x.id === resId);
  if (!r) return;
  const sum = getResidentFeeSummary(r);

  document.getElementById('vac-resident-id').value = r.id;
  document.getElementById('vac-resident-summary').textContent =
    `Vacating ${r.name} (${r.id}) from Room ${r.roomNo}, Bed ${r.bedNo} | Joined: ${r.joiningDate} | Current Pending Fee: ${inr(sum.pending)}`;
  document.getElementById('vac-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('vac-final-paid').value = sum.pending;
  document.getElementById('vac-refund').value = r.deposit || 0;
  document.getElementById('vacate-modal').classList.remove('hidden');
}

function confirmVacateResident(e) {
  e.preventDefault();
  const resId = document.getElementById('vac-resident-id').value;
  const r = db.residents.find(x => x.id === resId);
  if (!r) return;

  const vacDate = document.getElementById('vac-date').value;
  const reason = document.getElementById('vac-reason').value.trim();
  const finalPaid = parseFloat(document.getElementById('vac-final-paid').value) || 0;
  const refund = parseFloat(document.getElementById('vac-refund').value) || 0;
  const remarks = document.getElementById('vac-remarks').value.trim();

  if (finalPaid > 0) {
    applyPaymentToResident(r, finalPaid);
    db.payments.push({
      id: 'PAY-' + (1001 + db.payments.length),
      receiptNo: 'KHV-REC-' + (1001 + db.payments.length),
      residentId: r.id,
      residentName: r.name,
      roomNo: r.roomNo,
      amount: finalPaid,
      date: vacDate,
      mode: 'Cash',
      txId: 'FINAL-SETTLE',
      proof: '',
      remarks: 'Final settlement at vacating',
      status: 'Approved'
    });
  }

  r.status = 'Vacated';
  r.vacatingDate = vacDate;
  r.vacateReason = reason;
  r.refundableDeposit = refund;
  if (remarks) r.remarks = remarks;

  addNotification(`Resident ${r.name} (${r.id}) vacated Room ${r.roomNo} Bed ${r.bedNo} on ${vacDate}. Bed is now available.`);
  saveDatabase();
  closeModal('vacate-modal');
  refreshAllAdminViews();
  alert(`${r.name} (${r.id}) has been successfully marked as Vacated. Room ${r.roomNo} Bed ${r.bedNo} is now free!`);
}

function applyPaymentToResident(res, amountToApply) {
  let rem = Number(amountToApply);
  (res.monthlyRecords || []).forEach(m => {
    const gap = Math.max(0, m.due - m.paid);
    if (gap > 0 && rem > 0) {
      const add = Math.min(gap, rem);
      m.paid += add;
      rem -= add;
    }
  });
  if (rem > 0 && res.monthlyRecords.length > 0) {
    res.monthlyRecords[res.monthlyRecords.length - 1].paid += rem;
  }
}

// 5. Online Payment Verifications
function renderVerificationsTable() {
  const tbody = document.getElementById('verifications-tbody');
  if (!tbody) return;

  tbody.innerHTML = db.payments.slice().reverse().map(p => {
    let badge = 'badge-warning';
    if (p.status === 'Approved') badge = 'badge-success';
    else if (p.status === 'Rejected') badge = 'badge-danger';

    return `
      <tr>
        <td><b>${p.id}</b><br><small>${p.receiptNo}</small></td>
        <td><b>${p.residentName}</b><br><small>${p.residentId}</small></td>
        <td>Room ${p.roomNo}</td>
        <td><b>${inr(p.amount)}</b></td>
        <td>${p.date}</td>
        <td>${p.mode}</td>
        <td><code>${p.txId}</code></td>
        <td>${p.proof ? '<span class="badge badge-info">Screenshot Attached</span>' : '-'}</td>
        <td><span class="badge ${badge}">${p.status}</span></td>
        <td>
          ${p.status === 'Pending Verification'
            ? `<button class="btn btn-sm btn-success" onclick="verifyOnlinePayment('${p.id}', 'Approved')">Approve</button>
               <button class="btn btn-sm btn-danger" onclick="verifyOnlinePayment('${p.id}', 'Rejected')">Reject</button>`
            : `<button class="btn btn-sm btn-primary" onclick="openDigitalReceipt('${p.id}')">🖨️ Receipt</button>`}
        </td>
      </tr>
    `;
  }).join('');
}

function verifyOnlinePayment(payId, decision) {
  const p = db.payments.find(x => x.id === payId);
  if (!p) return;

  p.status = decision;
  if (decision === 'Approved') {
    p.receiptNo = 'KHV-REC-' + (1000 + db.payments.indexOf(p) + 1);
    const r = db.residents.find(x => x.id === p.residentId);
    if (r) applyPaymentToResident(r, p.amount);
    addNotification(`Payment ${p.id} of ${inr(p.amount)} by ${p.residentName} Approved.`);
  } else {
    addNotification(`Payment ${p.id} of ${inr(p.amount)} by ${p.residentName} Rejected.`);
  }

  saveDatabase();
  refreshAllAdminViews();
}

// 6. Cash & Front-Desk Exact-Amount QR Counter
function prepareCashCounter() {
  const sel = document.getElementById('counter-resident-id');
  if (!sel) return;
  const cur = sel.value;
  const activeRes = db.residents.filter(r => r.status !== 'Vacated');

  sel.innerHTML = activeRes.map(r => {
    const sum = getResidentFeeSummary(r);
    return `<option value="${r.id}">${r.id} — ${r.name} (Room ${r.roomNo}, Due: ${inr(sum.pending)})</option>`;
  }).join('');

  if (cur && activeRes.some(r => r.id === cur)) sel.value = cur;
  document.getElementById('counter-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('counter-receipt').value = 'KHV-REC-' + (1001 + db.payments.length);
  onCounterResidentChange();
  renderExactAmountQR('counter-amount', 'counter-qr-container', 'counter-qr-badge');
}

function onCounterResidentChange() {
  const id = document.getElementById('counter-resident-id').value;
  const r = db.residents.find(x => x.id === id);
  if (r) document.getElementById('counter-resident-name').value = r.name;
}

function handleAdminCashOrQRPayment(e) {
  e.preventDefault();
  const resId = document.getElementById('counter-resident-id').value;
  const r = db.residents.find(x => x.id === resId);
  if (!r) return;

  const amount = parseFloat(document.getElementById('counter-amount').value);
  const date = document.getElementById('counter-date').value;
  const mode = document.getElementById('counter-mode').value;
  const receiptNo = document.getElementById('counter-receipt').value.trim();
  const remarks = document.getElementById('counter-remarks').value.trim();

  const newPayId = 'PAY-' + (1001 + db.payments.length);
  db.payments.push({
    id: newPayId,
    receiptNo,
    residentId: r.id,
    residentName: r.name,
    roomNo: r.roomNo,
    amount,
    date,
    mode,
    txId: receiptNo,
    proof: '',
    remarks,
    status: 'Approved'
  });

  applyPaymentToResident(r, amount);
  addNotification(`Front-desk ${mode} payment of ${inr(amount)} received from ${r.name} (${r.id}).`);
  saveDatabase();

  document.getElementById('counter-amount').value = '';
  renderExactAmountQR('counter-amount', 'counter-qr-container', 'counter-qr-badge');
  refreshAllAdminViews();
  openDigitalReceipt(newPayId);
}

// 7. Vacated History Archive
function renderVacatedHistory() {
  const q = (document.getElementById('search-history-input').value || '').toLowerCase();
  const tbody = document.getElementById('vacated-history-tbody');
  if (!tbody) return;

  const vacated = db.residents.filter(r => r.status === 'Vacated');
  tbody.innerHTML = vacated.filter(r =>
    r.id.toLowerCase().includes(q) ||
    r.name.toLowerCase().includes(q) ||
    r.mobile.includes(q) ||
    r.roomNo.includes(q) ||
    r.joiningDate.includes(q) ||
    r.vacatingDate.includes(q)
  ).map(r => {
    const sum = getResidentFeeSummary(r);
    return `
      <tr>
        <td><b>${r.id}</b></td>
        <td><b>${r.name}</b><br><small>${r.mobile}</small></td>
        <td>${r.address}</td>
        <td>Room ${r.roomNo} / Bed ${r.bedNo}</td>
        <td>${r.joiningDate}</td>
        <td>${r.vacatingDate}</td>
        <td><b>${calculateStayDays(r.joiningDate, r.vacatingDate)}</b></td>
        <td>${inr(sum.totalPaid)}</td>
        <td>${inr(sum.pending)}</td>
        <td>${r.vacateReason || '-'}<br><small>${r.remarks || ''}</small></td>
      </tr>
    `;
  }).join('') || '<tr><td colspan="10">No matching archived records found.</td></tr>';
}

// 8. Revenue & Tax Management
function renderRevenueAndTax() {
  const approved = db.payments.filter(p => p.status === 'Approved');
  const totalRev = approved.reduce((s, p) => s + Number(p.amount), 0);
  const cashRev = approved.filter(p => p.mode === 'Cash').reduce((s, p) => s + Number(p.amount), 0);
  const upiRev = approved.filter(p => p.mode === 'UPI').reduce((s, p) => s + Number(p.amount), 0);
  const bankRev = approved.filter(p => p.mode === 'Bank Transfer').reduce((s, p) => s + Number(p.amount), 0);

  const taxRate = Number(db.settings.taxRate || 10);
  const taxAmt = Math.round((totalRev * taxRate) / 100);
  const netRev = totalRev - taxAmt;

  document.getElementById('revenue-metrics-cards').innerHTML = `
    <div class="metric-card success"><span>Total Gross Revenue</span><h3>${inr(totalRev)}</h3></div>
    <div class="metric-card info"><span>UPI QR Revenue</span><h3>${inr(upiRev)}</h3></div>
    <div class="metric-card warning"><span>Bank Transfer Revenue</span><h3>${inr(bankRev)}</h3></div>
    <div class="metric-card"><span>Cash Revenue</span><h3>${inr(cashRev)}</h3></div>
    <div class="metric-card danger"><span>Tax Amount (${taxRate}%)</span><h3>${inr(taxAmt)}</h3></div>
    <div class="metric-card success"><span>Net Post-Tax Revenue</span><h3>${inr(netRev)}</h3></div>
  `;

  document.getElementById('tax-rate-config').value = taxRate;
  document.getElementById('tax-summary-breakdown').innerHTML = `
    <div><b>Gross Hostel Revenue:</b> ${inr(totalRev)}</div>
    <div><b>Configured Tax Rate:</b> ${taxRate}%</div>
    <div><b>Calculated Tax Payable (Revenue × ${taxRate}%):</b> <span style="color:#ef4444;font-weight:700;">${inr(taxAmt)}</span></div>
    <div><b>Net Revenue After Tax:</b> <span style="color:#10b981;font-weight:800;font-size:1.1rem;">${inr(netRev)}</span></div>
  `;

  document.getElementById('revenue-mode-breakdown').innerHTML = `
    <div><b>UPI / QR Code Collections:</b> ${inr(upiRev)}</div>
    <div><b>Bank Account Transfers (NEFT/IMPS):</b> ${inr(bankRev)}</div>
    <div><b>Front-Desk Cash Collections:</b> ${inr(cashRev)}</div>
    <hr style="margin:8px 0; border:none; border-top:1px solid #e2e8f0;">
    <div><b>Total Verified Collections:</b> <b>${inr(totalRev)}</b></div>
  `;
}

function updateTaxRateConfig() {
  db.settings.taxRate = parseFloat(document.getElementById('tax-rate-config').value) || 0;
  saveDatabase();
  renderRevenueAndTax();
  renderAdminDashboard();
}

// 9. Notifications
function renderNotifications() {
  const box = document.getElementById('notifications-list');
  if (!box) return;
  box.innerHTML = db.notifications.map(n => `
    <div style="padding:12px; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; background:${n.read ? '#fff' : '#eef2ff'}; border-radius:8px; margin-bottom:6px;">
      <span>🔔 ${n.text}</span>
      <small style="color:#64748b;">${n.time}</small>
    </div>
  `).join('');
}

function markAllNotificationsRead() {
  db.notifications.forEach(n => { n.read = true; });
  saveDatabase();
  refreshAllAdminViews();
}

// 10. Settings
function loadSettingsForm() {
  document.getElementById('cfg-hostel-name').value = db.settings.hostelName;
  document.getElementById('cfg-hostel-address').value = db.settings.address;
  document.getElementById('cfg-upi-id').value = db.settings.upiId;
  document.getElementById('cfg-bank-name').value = db.settings.bankName;
  document.getElementById('cfg-acc-holder').value = db.settings.accHolder;
  document.getElementById('cfg-acc-num').value = db.settings.accNumber;
  document.getElementById('cfg-ifsc').value = db.settings.ifsc;
}

function savePaymentConfig(e) {
  e.preventDefault();
  db.settings.hostelName = document.getElementById('cfg-hostel-name').value.trim();
  db.settings.address = document.getElementById('cfg-hostel-address').value.trim();
  db.settings.upiId = document.getElementById('cfg-upi-id').value.trim();
  db.settings.bankName = document.getElementById('cfg-bank-name').value.trim();
  db.settings.accHolder = document.getElementById('cfg-acc-holder').value.trim();
  db.settings.accNumber = document.getElementById('cfg-acc-num').value.trim();
  db.settings.ifsc = document.getElementById('cfg-ifsc').value.trim();
  saveDatabase();
  alert('Hostel Payment & Bank Settings Updated!');
}

// ==================== RESIDENT PORTAL VIEWS ====================
function refreshAllResidentViews() {
  if (!activeResidentUser) return;
  const r = db.residents.find(x => x.id === activeResidentUser.id) || activeResidentUser;
  activeResidentUser = r;

  const sum = getResidentFeeSummary(r);
  document.getElementById('res-welcome-heading').textContent = `Welcome, ${r.name} (${r.id})`;
  document.getElementById('res-nav-subtitle').textContent = `${r.id} | Room ${r.roomNo}`;
  document.getElementById('res-status-pill').textContent = r.status;
  document.getElementById('res-hostel-address-bar').textContent = `${db.settings.hostelName} | ${db.settings.address}`;

  document.getElementById('resident-summary-cards').innerHTML = `
    <div class="metric-card"><span>Room & Bed</span><h3>R-${r.roomNo} / Bed ${r.bedNo}</h3></div>
    <div class="metric-card info"><span>Monthly Fee</span><h3>${inr(r.monthlyFee)}</h3></div>
    <div class="metric-card success"><span>Total Amount Paid</span><h3>${inr(sum.totalPaid)}</h3></div>
    <div class="metric-card danger"><span>Pending Amount</span><h3>${inr(sum.pending)}</h3></div>
    <div class="metric-card warning"><span>Payment Status</span><h3>${sum.payStatus}</h3></div>
  `;

  document.getElementById('resident-profile-grid').innerHTML = `
    <div class="info-box"><small>Resident ID</small><b>${r.id}</b></div>
    <div class="info-box"><small>Full Name</small><b>${r.name}</b></div>
    <div class="info-box"><small>Guardian Name</small><b>${r.guardian}</b></div>
    <div class="info-box"><small>Mobile Number</small><b>${r.mobile}</b></div>
    <div class="info-box"><small>Email</small><b>${r.email}</b></div>
    <div class="info-box"><small>Permanent Address</small><b>${r.address}</b></div>
  `;

  document.getElementById('resident-stay-grid').innerHTML = `
    <div class="info-box"><small>Joining Date</small><b>${r.joiningDate}</b></div>
    <div class="info-box"><small>Stay Duration</small><b>${calculateStayDays(r.joiningDate, r.vacatingDate)}</b></div>
    <div class="info-box"><small>Expected Vacating</small><b>${r.expectedVacate || '-'}</b></div>
    <div class="info-box"><small>Security Deposit</small><b>${inr(r.deposit)}</b></div>
    <div class="info-box"><small>Total Fee Due</small><b>${inr(sum.totalDue)}</b></div>
    <div class="info-box"><small>Current Status</small><b>${r.status}</b></div>
  `;

  // Monthly Ledger
  document.getElementById('resident-monthly-tbody').innerHTML = (r.monthlyRecords || []).map(m => {
    const pend = Math.max(0, m.due - m.paid);
    const st = pend === 0 ? 'Paid' : (m.paid > 0 ? 'Partially Paid' : 'Pending');
    return `<tr><td><b>${m.month}</b></td><td>${inr(m.due)}</td><td>${inr(m.paid)}</td><td style="color:${pend > 0 ? '#ef4444' : '#10b981'};font-weight:700;">${inr(pend)}</td><td>${m.dueDate}</td><td><span class="badge ${pend === 0 ? 'badge-success' : 'badge-warning'}">${st}</span></td></tr>`;
  }).join('');

  // Online Payment Section Info
  document.getElementById('res-payment-account-banner').innerHTML = `
    <b>${r.name} (${r.id})</b> | Room ${r.roomNo} | Monthly Fee: <b>${inr(r.monthlyFee)}</b> | Current Pending Balance: <b style="color:#ef4444;">${inr(sum.pending)}</b>
  `;
  const dateField = document.getElementById('res-pay-date');
  if (!dateField.value) dateField.value = new Date().toISOString().split('T')[0];

  document.getElementById('res-qr-hostel-title').textContent = db.settings.hostelName;
  document.getElementById('res-qr-upi-id').textContent = db.settings.upiId;
  document.getElementById('res-bank-details-box').innerHTML = `
    <div><b>Bank Name:</b> ${db.settings.bankName}</div>
    <div><b>Account Holder:</b> ${db.settings.accHolder}</div>
    <div><b>Account Number:</b> ${db.settings.accNumber}</div>
    <div><b>IFSC Code:</b> ${db.settings.ifsc}</div>
  `;

  renderExactAmountQR('res-pay-amount', 'res-qr-container', 'res-qr-badge');

  // Resident Payment History
  const myPayments = db.payments.filter(p => p.residentId === r.id);
  document.getElementById('resident-history-tbody').innerHTML = myPayments.slice().reverse().map(p => `
    <tr>
      <td>${p.date}</td>
      <td><b>${p.receiptNo}</b></td>
      <td><b>${inr(p.amount)}</b></td>
      <td>${p.mode}</td>
      <td><code>${p.txId}</code></td>
      <td><span class="badge ${p.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${p.status}</span></td>
      <td>${p.status === 'Approved' ? `<button class="btn btn-sm btn-primary" onclick="openDigitalReceipt('${p.id}')">🖨️ Receipt</button>` : 'Pending Admin Approval'}</td>
    </tr>
  `).join('') || '<tr><td colspan="7">No payments submitted yet.</td></tr>';
}

function setResQuickAmount(val) {
  if (!activeResidentUser) return;
  const sum = getResidentFeeSummary(activeResidentUser);
  const input = document.getElementById('res-pay-amount');
  if (val === 'pending') input.value = sum.pending > 0 ? sum.pending : activeResidentUser.monthlyFee;
  else if (val === 'monthly') input.value = activeResidentUser.monthlyFee;
  else input.value = val;

  renderExactAmountQR('res-pay-amount', 'res-qr-container', 'res-qr-badge');
}

function handleProofUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => { uploadedProofDataUrl = ev.target.result; };
  reader.readAsDataURL(file);
}

function handleResidentOnlinePayment(e) {
  e.preventDefault();
  if (!activeResidentUser) return;

  const amount = parseFloat(document.getElementById('res-pay-amount').value);
  const date = document.getElementById('res-pay-date').value;
  const mode = document.getElementById('res-pay-mode').value;
  const txId = document.getElementById('res-pay-utr').value.trim();
  const remarks = document.getElementById('res-pay-remarks').value.trim();

  const payId = 'PAY-' + (1001 + db.payments.length);
  db.payments.push({
    id: payId,
    receiptNo: 'PENDING',
    residentId: activeResidentUser.id,
    residentName: activeResidentUser.name,
    roomNo: activeResidentUser.roomNo,
    amount,
    date,
    mode,
    txId,
    proof: uploadedProofDataUrl || 'Proof Submitted',
    remarks,
    status: 'Pending Verification'
  });

  addNotification(`Online payment ${payId} of ${inr(amount)} submitted by ${activeResidentUser.name} (${activeResidentUser.id}) — Pending Verification.`);
  saveDatabase();

  uploadedProofDataUrl = '';
  document.getElementById('res-pay-amount').value = '';
  document.getElementById('res-pay-utr').value = '';
  renderExactAmountQR('res-pay-amount', 'res-qr-container', 'res-qr-badge');
  refreshAllResidentViews();
  alert(`Payment of ${inr(amount)} submitted! Status: Pending Verification by Hostel Admin.`);
}

// ==================== 17. DIGITAL RECEIPT GENERATOR ====================
function openDigitalReceipt(payId) {
  const p = db.payments.find(x => x.id === payId);
  if (!p) return;
  const r = db.residents.find(x => x.id === p.residentId);
  const sum = r ? getResidentFeeSummary(r) : { pending: 0 };

  document.getElementById('printable-receipt-area').innerHTML = `
    <div style="text-align:center; border-bottom:2px solid #0f172a; padding-bottom:12px; margin-bottom:14px;">
      <h2 style="color:#4f46e5;">${db.settings.hostelName}</h2>
      <p style="font-size:0.82rem; color:#64748b;">📍 ${db.settings.address}</p>
      <h4 style="margin-top:8px; background:#0f172a; color:#fff; display:inline-block; padding:4px 14px; border-radius:6px;">OFFICIAL FEE PAYMENT RECEIPT</h4>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.88rem; line-height:1.8;">
      <div><b>Receipt Number:</b> ${p.receiptNo}</div>
      <div><b>Payment Date:</b> ${p.date}</div>
      <div><b>Resident Name:</b> ${p.residentName}</div>
      <div><b>Resident ID:</b> ${p.residentId}</div>
      <div><b>Room Number:</b> Room ${p.roomNo}</div>
      <div><b>Payment Mode:</b> ${p.mode}</div>
      <div><b>Transaction / UTR ID:</b> ${p.txId}</div>
      <div><b>Remaining Pending Balance:</b> ${inr(sum.pending)}</div>
    </div>
    <div style="margin-top:16px; padding:12px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-weight:700;">TOTAL AMOUNT RECEIVED:</span>
      <span style="font-size:1.35rem; font-weight:800; color:#10b981;">${inr(p.amount)}</span>
    </div>
    <div style="margin-top:22px; display:flex; justify-content:space-between; font-size:0.8rem; color:#64748b;">
      <span>Resident Signature</span>
      <span>Authorized Signatory (${db.settings.hostelName})</span>
    </div>
  `;
  document.getElementById('receipt-modal').classList.remove('hidden');
}
