import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">{{ i18n.t('home.title') }}</h1>
          <p class="hero-subtitle">{{ i18n.t('home.subtitle') }}</p>
          <p class="hero-description">
            {{ i18n.t('home.description') }}
          </p>
          <a routerLink="/tasksMf" class="cta-button">
            <span class="icon">📋</span>
            {{ i18n.t('home.cta') }}
          </a>
        </div>
      </section>

      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>{{ i18n.t('home.features.fast.title') }}</h3>
          <p>{{ i18n.t('home.features.fast.description') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>{{ i18n.t('home.features.realtime.title') }}</h3>
          <p>{{ i18n.t('home.features.realtime.description') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>{{ i18n.t('home.features.smart.title') }}</h3>
          <p>{{ i18n.t('home.features.smart.description') }}</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 12px;
      margin-bottom: 3rem;
      box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
    }

    .hero-content {
      max-width: 700px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: #00d4ff;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #b0b0b0;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%);
      color: #0f0f1e;
      padding: 1rem 2.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 600;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
    }

    .icon {
      font-size: 1.3rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      padding: 0 1rem;
    }

    .feature-card {
      background: #1a1a2e;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s;
      border: 1px solid #16213e;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      border-color: #00d4ff;
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #00d4ff;
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      color: #b0b0b0;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1.5rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .features {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class HomeComponent {
  constructor(public i18n: I18nService) {}
}
