<script setup>
import Input from "@/Components/Input.vue";
import Textarea from "@/Components/Textarea.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch } from "vue";

const form = useForm({
  title: "",
  description: "",
  start_time: null,
  end_time: null,
  location: "",
});

const minEndTime = ref("");
// Setiap start_time berubah, update minEndTime
watch(
  () => form.start_time,
  (newStartTime) => {
    minEndTime.value = newStartTime;
  }
);

const submit = () => {
  form.post(route("agenda.store"));
};
</script>

<template>
  <section class="container py-4">
    <h1 class="h1">Tambah Agenda</h1>
    <p>Tambah Pengumuman & Agenda Nurul Iman</p>
    <form @submit.prevent="submit" class="py-4 max-w-lg">
      <Input
        label="Title"
        id="title"
        icon="heading"
        placeholder="Judul agenda.."
        v-model="form.title"
        :error="form.errors.name"
      />
      <Textarea
        label="Description"
        icon="newspaper"
        placeholder="Deskripsi.."
        v-model="form.description"
        :error="form.errors.description"
      />
      <Input
        label="Waktu Mulai"
        id="start-time"
        icon="clock"
        type="datetime-local"
        v-model="form.start_time"
        :error="form.errors.start_time"
      />
      <Input
        label="Waktu Selesai"
        id="end-time"
        icon="clock"
        type="datetime-local"
        v-model="form.end_time"
        :error="form.errors.end_time"
        :min="minEndTime"
      />
      <Input
        label="Location"
        id="location"
        icon="location"
        placeholder="Lokasi.."
        v-model="form.location"
        :error="form.errors.location"
      />
      <button type="submit" class="btn" :disabled="form.processing">
        Tambah
      </button>
    </form>
  </section>
</template>