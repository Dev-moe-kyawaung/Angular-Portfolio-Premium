import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info {
  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: var(--card-radius);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateX(5px);
  }
}

.info-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);

  mat-icon {
    font-size: 24px;
  }
}

.info-content {
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }
}

.social-section {
  padding: 1.5rem;
  border-radius: var(--card-radius);
  margin-top: 2rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-gradient);
    color: white;
    border-color: transparent;
    transform: translateY(-3px);
  }

  mat-icon {
    font-size: 20px;
  }
}

.map-section {
  margin-top: 4rem;
  padding: 4rem;
  text-align: center;
  border-radius: var(--card-radius);

  .map-placeholder {
    mat-icon {
      font-size: 4rem;
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--text-secondary);
    }
  }
}
