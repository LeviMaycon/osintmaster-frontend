import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerService } from './scanner.service';
import { Subject, takeUntil, finalize } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.scss'
})
export class ScannerComponent implements OnDestroy {
  ip: string = '';
  options: string = '-sS -p 80,443 -T4';
  result: string = '';
  isLoading: boolean = false;
  scanSuccess: boolean = false;

  selectedScanType: string = '-sS';
  selectedPortRange: string = '-p 80,443';
  selectedTimingTemplate: string = '-T4';

  osDetection: boolean = false;
  scriptScan: boolean = false;
  verbose: boolean = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly scannerService: ScannerService,
    private readonly clipboard: Clipboard
  ) {}

  updateOptions(): void {
    const additionalOptions = [
      this.osDetection ? '-O' : '',
      this.scriptScan ? '-sC' : '',
      this.verbose ? '-v' : ''
    ].filter(Boolean).join(' ');

    this.options = [
      this.selectedScanType,
      this.selectedPortRange,
      this.selectedTimingTemplate,
      additionalOptions
    ].filter(Boolean).join(' ');
  }

  onScan(): void {
    if (!this.ip || !this.options) {
      return;
    }

    this.isLoading = true;
    this.scanSuccess = false;

    this.scannerService.scanIp(this.ip, this.options)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          this.result = response.result || "No result found.";
          this.scanSuccess = true;
        },
        error: (error) => {
          this.scanSuccess = false;
          this.result = error.error?.error || "An error occurred while scanning the IP address.";
          console.error('Scan error:', error);
        }
      });
  }

  copyResult(): void {
    if (this.result) {
      this.clipboard.copy(this.result);

      const copyButton = document.getElementById("copy");
      if (copyButton) {
        copyButton.textContent = 'Copied';

        setTimeout(() => {
          const button = document.getElementById('copy');
          if (button) {
            button.textContent = 'Copy';
          }
        }, 2000);
      }
    }
  }

  clearResult(): void {
    this.result = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
