import "./App.css";

function App() {
  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-brand">
            <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            DemoApp
          </div>
          <ul className="nav-links">
            <li>
              <a href="#features">Tính năng</a>
            </li>
            <li>
              <a href="#download">Tải xuống</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Dành cho Windows 10 / 11</div>
          <h1 className="hero-title">
            Giải pháp quản lý
            <br />
            <span className="gradient-text">thông minh & hiệu quả</span>
          </h1>
          <p className="hero-desc">
            DemoApp giúp bạn tối ưu quy trình làm việc, quản lý dữ liệu dễ dàng
            và nâng cao năng suất đội nhóm — ngay trên Windows của bạn.
          </p>
          <a href="#download" className="btn-primary">
            Tải xuống miễn phí
          </a>
        </div>
        <div className="hero-visual">
          <div className="window-mockup">
            <div className="window-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="window-title">DemoApp</span>
            </div>
            <div className="window-body">
              <div className="mock-sidebar">
                <div className="mock-item active" />
                <div className="mock-item" />
                <div className="mock-item" />
                <div className="mock-item" />
              </div>
              <div className="mock-content">
                <div className="mock-bar wide" />
                <div className="mock-bar medium" />
                <div className="mock-card" />
                <div className="mock-bar short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <h2 className="section-title">Tính năng nổi bật</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Hiệu suất cao</h3>
            <p>
              Tối ưu hóa để chạy mượt mà trên mọi cấu hình Windows, tiêu thụ tài
              nguyên thấp.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Bảo mật tuyệt đối</h3>
            <p>
              Mã hóa dữ liệu end-to-end, phân quyền chi tiết theo vai trò người
              dùng.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Đồng bộ real-time</h3>
            <p>
              Dữ liệu được đồng bộ tức thời giữa các thiết bị, luôn cập nhật mới
              nhất.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Báo cáo thông minh</h3>
            <p>
              Dashboard trực quan, xuất báo cáo Excel/PDF chỉ với một cú click.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="download">
        <div className="download-card">
          <div className="download-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
          </div>
          <h2>Tải DemoApp ngay hôm nay</h2>
          <p>Miễn phí hoàn toàn. Hỗ trợ Windows 10 / 11 (64-bit).</p>
          <div className="download-meta">
            <span>📦 Phiên bản 1.0.0</span>
            <span>💾 ~75 MB</span>
            <span>✅ Không cần đăng ký</span>
          </div>
          {/* ← Thay YOUR_GOOGLE_DRIVE_LINK bằng link tải thực của bạn */}
          <a
            href="https://drive.google.com/file/d/1Kg-s-X4zs4OXcp6oCc39HG5hecnd46fB/view?usp=sharing"
            className="btn-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="22"
              height="22"
            >
              <path
                d="M12 3v13M5 14l7 7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M3 21h18" strokeLinecap="round" />
            </svg>
            Tải xuống (.exe)
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} DemoApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
