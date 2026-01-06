import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Added ReactiveFormsModule
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Added CommonModule for *ngIf

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-add-asset',
  standalone: true, // Ensure this is present for modern Angular
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './add-asset.html',
  styleUrl: './add-asset.css',
})
export class AddAsset implements OnInit {
  assetForm!: FormGroup;
  isEditMode = false;
  assetId!: string;

  macOptions = Array.from({ length: 10 }).map((_, i) => ({
    label: `Mac ${i + 1}`,
    value: `Mac ${i + 1}`,
  }));

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private assetService: AssetService
  ) {}

  ngOnInit() {
    this.assetForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      mac: [null, Validators.required],
      link: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });

    // Check edit mode
    this.assetId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.assetId) {
      this.isEditMode = true;
      this.loadAsset(this.assetId);
    }
  }

  loadAsset(id: string) {
    // 🔹 Replace this with API call
    const asset = {
      title: 'Router Asset',
      description: 'Main office router used for networking',
      mac: 'mac3',
      link: 'https://example.com',
    };

    this.assetForm.patchValue(asset);
  }

  onSubmit() {
    if (this.assetForm.invalid) return;

    const payload = {
      title: this.assetForm.value.title,
      description: this.assetForm.value.description,
      mac: this.assetForm.value.mac,
      link: this.assetForm.value.link,
    };

    if (this.isEditMode) {
      this.assetService.upadteAsset(this.assetId, payload).subscribe({
        next: () => {
          console.log('Asset updated successfully');
          this.router.navigate(['/assets']);
        },
        error: (err) => {
          console.error('Update failed', err);
        },
      });
    } else {
      this.assetService.createAsset(payload).subscribe({
        next: () => {
          console.log('Asset created successfully');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Creation failed', err);
        },
      });
    }
  }
}
