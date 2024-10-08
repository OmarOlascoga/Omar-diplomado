<template>
  <BreadCrumb :breadcrumbs="breadcrumbs" />
  <div class="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
    <div class="mb-3 flex justify-between" v-if="!create">
      <h2 class="text-lg font-bold ml-3">Listado de actas</h2>
      <router-link to="/actas/crear" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Registro
      </router-link>
    </div>
    <Grid
      :headers="headers"
      :data="data"
      @onEliminar="onEliminar"
      @onEditar="onEditar"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Grid from "@/utils/Grid/Grid.vue";
import BreadCrumb from "@/utils/Breadcrumb.vue";
import Swal from "sweetalert2";

const headers = ref([]);
const data = ref([]);
const create = ref(false);

onMounted(() => onInitData());

const breadcrumbs = [
  { text: "Inicio", link: "#" },
  { text: "Actas", link: "#" },
];

const onEditar = (item: any) => {
  alert(JSON.stringify(item));
};

const onEliminar = (id: number) => {
  const index = data.value?.findIndex(({ ID }) => ID === id);
  if (index !== -1) {
    const record = data.value[index];
    const solicitudText = record.SOLICITUD || 'Sin descripción';

    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: `Solicitud ${record.ID}: ${solicitudText}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar el registro de data
        data.value.splice(index, 1);
        Swal.fire("Eliminado!", "El registro ha sido eliminado.", "success");
      }
    });
  } else {
    Swal.fire("Error", "Registro no encontrado.", "error");
  }
};

const onInitData = () => {
  headers.value = [
    "ID",
    "FECHA DE ACTA",
    "ASUNTO",
    "DESCRIPCIÓN",
    "PARTICIPANTES",
    "RESULTADO",
    "OBSERVACIONES",
    "ACCIONES",
  ];
  data.value = [
    {
      ID: 1,
      "FECHA DE ACTA": "2022-01-01",
      ASUNTO: "Reunión de inicio de proyecto",
      DESCRIPCIÓN: "Reunión para discutir los objetivos y alcances del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Aprobado",
      OBSERVACIONES: "Se acordó iniciar el proyecto el 15 de enero",
    },
    {
      ID: 2,
      "FECHA DE ACTA": "2022-01-15",
      ASUNTO: "Reunión de seguimiento de proyecto",
      DESCRIPCIÓN: "Reunión para discutir el avance del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Pendiente",
      OBSERVACIONES: "Se acordó realizar una reunión de seguimiento el 1 de febrero",
    },
    {
      ID: 3,
      "FECHA DE ACTA": "2022-02-01",
      ASUNTO: "Reunión de cierre de proyecto",
      DESCRIPCIÓN: "Reunión para discutir el cierre del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Aprobado",
      OBSERVACIONES: "Se acordó cerrar el proyecto el 15 de febrero",
    },
    {
      ID: 4,
      "FECHA DE ACTA": "2022-03-01",
      ASUNTO: "Reunión de planificación de proyecto",
      DESCRIPCIÓN: "Reunión para discutir la planificación del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Pendiente",
      OBSERVACIONES: "Se acordó realizar una reunión de planificación el 15 de marzo",
    },
    {
      ID: 5,
      "FECHA DE ACTA": "2022-04-01",
      ASUNTO: "Reunión de revisión de proyecto",
      DESCRIPCIÓN: "Reunión para discutir la revisión del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Aprobado",
      OBSERVACIONES: "Se acordó realizar una reunión de revisión el 15 de abril",
    },
    {
      ID: 6,
      "FECHA DE ACTA": "2022-05-01",
      ASUNTO: "Reunión de evaluación de proyecto",
      DESCRIPCIÓN: "Reunión para discutir la evaluación del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Pendiente",
      OBSERVACIONES: "Se acordó realizar una reunión de evaluación el 15 de mayo",
    },
    {
      ID: 7,
      "FECHA DE ACTA": "2022-06-01",
      ASUNTO: "Reunión de seguimiento de proyecto",
      DESCRIPCIÓN: "Reunión para discutir el seguimiento del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Aprobado",
      OBSERVACIONES: "Se acordó realizar una reunión de seguimiento el 15 de junio",
    },
    {
      ID: 8,
      "FECHA DE ACTA": "2022-07-01",
      ASUNTO: "Reunión de cierre de proyecto",
      DESCRIPCIÓN: "Reunión para discutir el cierre del proyecto",
      PARTICIPANTES: "Juan Pérez, María García, Carlos López",
      RESULTADO: "Pendiente",
      OBSERVACIONES: "Se acordó cerrar el proyecto el 15 de julio",
    }
  ];
};
</script>