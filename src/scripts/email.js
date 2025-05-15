export function contactForm() {
        return {
          name: '',
          email: '',
          message: '',
          loading: false,
          success: false,
          error: false,
          errors: {},

          validate() {
            this.errors = {};
            if (!this.name) this.errors.name = 'Please enter your name';
            if (!this.email || !this.email.includes('@')) this.errors.email = 'Please enter a valid email';
            if (!this.message) this.errors.message = 'Please enter your message';
            return Object.keys(this.errors).length === 0;
          },

          async submitForm() {
              if (!this.validate()) {
                  console.error('Validation failed', this.errors);
                  return;
              }

            this.loading = true;
            this.success = false;
            this.error = false;

            try {
              const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: this.name,
                  email: this.email,
                  message: this.message,
                }),
              });

              if (res.ok) {
                this.success = true;
                this.name = this.email = this.message = '';
              } else {
                this.error = true;
              }
            } catch (e) {
              this.error = true;
              console.error(e);
            } finally {
              this.loading = true;
            }
          },
        };
      }